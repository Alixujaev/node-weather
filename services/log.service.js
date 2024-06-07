import chalk from "chalk"
import dedent from "dedent-js"

export const printSuccess = (message) => {
  console.log(`${chalk.green('SUCCESS')}: ${message}`)
}

export const printError = (error) => {
  console.log(`${chalk.red('ERROR')}: ${error}`)
}

export const printHelp = () => {
  console.log(dedent`${chalk.bgCyan('HELP')}
  -h --help
  -s [CITY] for install city
  -t [API_KEY] for install token
  `)
}