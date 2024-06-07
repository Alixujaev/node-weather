export const getArgs = (args) => {
  const res = {}

  const [executer, file, ...rest] = args

  rest.forEach((value, index) => {
    if(value.charAt(0) == '-'){
      if(index == rest.length - 1){
        res[value.substring(1)] = true
      }else if(rest[index + 1].charAt(0) != '-'){
        res[value.substring(1)] = rest[index + 1]
      }else{
        res[value.substring(1)] = true
      }
    }
  })

  return res
}
