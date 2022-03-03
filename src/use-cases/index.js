const {nfParser, splitwise} = require("../providers/index")

const buildImportProducts = require("./import-products")
const buildGetProductsFromNfce = require("./get-products-from-nfce")
const buildGetSplitwiseGroups = require('./get-splitwise-groups')

const importProducts = buildImportProducts({splitwise})
const getProductsFromNfce = buildGetProductsFromNfce({nfParser})
const getSplitwseGroups = buildGetSplitwiseGroups({splitwise})

module.exports = {
  importProducts,
  getProductsFromNfce,
  getSplitwseGroups,
}
