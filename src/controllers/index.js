const {
  importProducts,
  getProductsFromNfce,
  getSplitwseGroups,
} = require("../use-cases/index")

const buildImportProductsController = require("./import-products-controller")
const buildGetProductsFromNfceController = require("./get-products-from-nfce-controller")
const buildGetSplitwiseGroupsController = require('./get-splitwise-groups-controller')

const importProductsController = buildImportProductsController({
  importProducts: importProducts.run
})
const getProductsFromNfceController = buildGetProductsFromNfceController({
  getProductsFromNfce: getProductsFromNfce.run
})
const getSplitwseGroupsController = buildGetSplitwiseGroupsController({
  getSplitwseGroups: getSplitwseGroups.run
})

module.exports = {
  importProductsController,
  getProductsFromNfceController,
  getSplitwseGroupsController,
}
