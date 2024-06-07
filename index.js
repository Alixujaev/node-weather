import { getArgs } from "./helpers/args.js";
import { getWeather } from "./services/api.service.js";
import { printError, printHelp, printSuccess } from "./services/log.service.js";
import { saveKeyValue } from "./services/storage.service.js";

const saveToke = async(token) => {
  if(!token.length){
    printError("No token provided")
    return
  }
  try {
  await saveKeyValue("token", token)
    printSuccess("Token saved successfully")
  } catch (error) {
    printError(error.message)
  }
}
const startCLI = () => {
  const args = getArgs(process.argv);

  if(args.h){

  }

  if(args.s){

  }

  if(args.t){
   return saveToke(args.t)
  }

  getWeather(process.env.CITY ?? 'Tashkent')
}

startCLI()