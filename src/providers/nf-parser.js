const axios = require("axios")

module.exports = function () {
  const baseUrl = process.env.NF_PARSER_BASEURL
  const apiKey = process.env.NF_PARSER_APIKEY
  return Object.freeze({
    parse,
  })

  async function parse(url) {
    const {data: nfData} = await axios({
      method: "GET",
      url: `${baseUrl}/nfce?url=${url}`,
      headers: {"Authorization": apiKey},
    })
    return nfData
  }
}
