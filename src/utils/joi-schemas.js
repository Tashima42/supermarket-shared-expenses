const Joi = require("joi")

const importProductsSchema = Joi.object().keys({
  products: Joi.array().items(Joi.object({
    name: Joi.string().required(),
    quantity: Joi.string().required(),
    totalValue: Joi.string().required(),
  }))
})

const getProductsFromNfceSchema = Joi.object().keys({
  url: Joi
    .string()
    .max(140)
    .min(120)
    .pattern(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/)
    .required(),
})

function joiMiddleware(schema, validateProperty) {
  return (req, res, next) => {
    try {
      Joi.assert(req[validateProperty], schema)
      next()
    } catch (error) {
      const {details} = error
      const message = details.map(i => i.message).join(',')
      res.status(400).send({success: false, error: {message}})
    }
  }
}

module.exports = {
  importProductsSchema,
  getProductsFromNfceSchema,
  joiMiddleware,
}
