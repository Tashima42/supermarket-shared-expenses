module.exports = function ({nfParser}) {
  return Object.freeze({
    run,
  })
  async function run({url}) {
    const nfce = await nfParser.parse(url)
    const {success} = nfce
    if (success) {
      const {nfce: {products}} = nfce
      return products
    }
    throw {nfce}
  }
}
