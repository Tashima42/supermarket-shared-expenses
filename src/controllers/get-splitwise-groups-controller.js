module.exports = function ({getSplitwseGroups}) {
  return async function (httpRequest) {
    try {
      const groups = await getSplitwseGroups()
      return {
        statusCode: 200,
        body: {
          success: true,
          groups
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
