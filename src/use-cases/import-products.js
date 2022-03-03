module.exports = function ({splitwise}) {
  return Object.freeze({
    run,
  })
  async function run({products, groupId}) {
    const createdExpenses = []
    for (const product of products) {
      const {name, quantity, totalValue} = product

      const expense = {
        description: name,
        details: `Quantity: ${quantity}`,
        cost: totalValue.replace(',', '.'),
        date: new Date().toISOString(),
        repeat_interval: 'never',
        currency_code: 'BRL',
        category_id: 15,
        group_id: parseInt(groupId),
        split_equally: true,
      }
      const createdExpense = await splitwise.createExpense(expense)
      createdExpenses.push(createdExpense)
    }
    return createdExpenses
  }
}
