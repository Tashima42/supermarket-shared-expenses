const express = require("express")
const cors = require("cors")

const callback = require("./utils/express-callback")

const {
  importProductsController,
  getProductsFromNfceController,
  getSplitwseGroupsController,
} = require("./controllers/index")

const {
  importProductsSchema,
  getProductsFromNfceSchema,
  joiMiddleware,
} = require("./utils/joi-schemas")

const app = express()
app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {return res.status(200).send({success: true})})

app.get(
  "/splitwise/groups",
  callback(getSplitwseGroupsController)
)

app.post(
  "/import/products",
  joiMiddleware(importProductsSchema, "query"),
  callback(importProductsController)
)
app.get(
  "/nfce/products",
  joiMiddleware(getProductsFromNfceSchema, "query"),
  callback(getProductsFromNfceController)
)

module.exports = app
