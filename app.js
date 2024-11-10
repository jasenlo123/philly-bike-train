const { scrap } = require("./src/locate.js")
const { riders } = require("./config")
const datawrapper = require("@api/datawrapper")

console.log(datawrapper)

const url = riders[0].jasen

scrap(url)