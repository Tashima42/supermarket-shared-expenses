module.exports = function ({importProducts}) {
  return async function (httpRequest) {
    try {
      const {products, groupId} = httpRequest.body
      const importedExpenses = await importProducts({groupId, products})
      return {
        statusCode: 200,
        body: {
          success: true,
          importedExpenses,
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
