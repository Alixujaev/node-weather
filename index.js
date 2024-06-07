import { getArgs } from "./helpers/args.js";
import { getIcons, getWeather } from "./services/api.service.js";
import { printError, printHelp, printResponse, printSuccess } from "./services/log.service.js";
import { getKeyValue, saveKeyValue } from "./services/storage.service.js";

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

const saveCity = async(city) => {
  if(!city.length){
    printError("No city provided")
    return
  }
  try {
  await saveKeyValue("city", city)
    printSuccess("City saved successfully")
  } catch (error) {
    printError(error.message)
  }
}


const getResult = async() => {
  const city = await getKeyValue('city')
  try {
    const result = await getWeather(process.env.CITY ?? city)
    printResponse(result, getIcons(result.weather[0].icon))
  } catch (error) {
    if(error?.response?.status == '404'){
      printError("City not found")
    }else if(error?.response?.status == '401'){
      printError("Invalid token")
    }else {
      printError(error.message)
    }
  }
}

const startCLI = () => {
  const args = getArgs(process.argv);

  if(args.h){
    return printHelp()
  }

  if(args.t){
   return saveToke(args.t)
  }

  if(args.c){
    return saveCity(args.c)
  }


  getResult()
}

startCLI()