module.exports = function ({splitwise}) {
  return Object.freeze({
    run,
  })
  async function run() {
    return await splitwise.getGroups()
  }
}
