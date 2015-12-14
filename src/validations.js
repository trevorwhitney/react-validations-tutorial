const millisecondsInYear = 1000 * 60 * 60 * 24 * 365

export function validateDate(inputValue) {
  return typeof inputValue === 'string' && isValidDate(inputValue) && studentIsOfAge(inputValue)
}

export function validateName(name) {
  return typeof name === 'string' && name.length > 2
}

export function validateRelationship(relationship) {
  return (typeof relationship !== "undefined") && relationship !== ""
}

function isValidDate(inputValue) {
  return inputValue.match(/\d{2}\/\d{2}\/\d{4}/)
}

function studentIsOfAge(inputValue) {
  let birthdate = new Date(inputValue)
  let currentDate = new Date()
  return ((((currentDate - birthdate) / millisecondsInYear)) > 18)
}
