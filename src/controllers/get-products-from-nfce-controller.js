module.exports = function ({getProductsFromNfce}) {
  return async function (httpRequest) {
    try {
      const {url} = httpRequest.query
      const products = await getProductsFromNfce({url})
      return {
        statusCode: 200,
        body: {
          success: true,
          products
        }
      }
    } catch (error) {
      console.error(error)
      return {
        statusCode: 500,
        body: {
          success: false,
          error: {
            message: error.message,
            stack: error.stack,
          }
        }
      }
    }
  }
}
