const searchLinks = /^\[([\w\s\d]+)\]\((https?:\/\/[\w\d./?=#]+)\)$/

/* Match full links and relative paths */
const regex = /^\[([\w\s\d]+)\]\(((?:\/|https?:\/\/)[\w\d./?=#]+)\)$/

const string = "[View the analytics docs](https://getanalytics.io/)"

const myMatch = string.match(regex)

console.log(myMatch)
/* ["[View the analytics docs](https://getanalytics.io/)", "View the analytics docs", "https://getanalytics.io/", index: 0, input: "[View the analytics docs](https://getanalytics.io/)", groups: undefined] */

// de-structure the array
const [ full, text, url ] = myMatch

console.log(text)
// 'View the analytics docs'

console.log(url)
// 'https://getanalytics.io/' 