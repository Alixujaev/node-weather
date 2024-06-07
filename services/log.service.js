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
  -c [CITY] for install city
  -t [API_KEY] for install token
  `)
}

export const printResponse = (response, icon) => {
  console.log(dedent`
  ${chalk.yellowBright('WEATHER')} city weather ${response.name}
  ${icon}  ${response.weather[0].description}
  Temperature: ${response.main.temp}°C (feels like: ${response.main.feels_like}°C)
  Humidity: ${response.main.humidity}%
  Wind speed: ${response.wind.speed} m/s
  `)
}