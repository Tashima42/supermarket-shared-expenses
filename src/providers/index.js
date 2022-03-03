const buildNfParser = require("./nf-parser")
const buildSplitwise = require("./splitwise")

const nfParser = buildNfParser()
const splitwise = buildSplitwise()

//splitwise.main().then(a => console.log(a))

module.exports = {
  nfParser,
  splitwise,
}
