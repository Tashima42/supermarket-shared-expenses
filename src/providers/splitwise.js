const axios = require("axios")

module.exports = function () {
  const defaultGroupId = process.env.SPLITWISE_DEFAULT_GROUPID || "30854382"
  const baseUrl = process.env.SPLITWISE_BASEURL
  const apiKey = process.env.SPLITWISE_APIKEY
  const headers = {'Authorization': `Bearer ${apiKey}`}
  return Object.freeze({
    createExpense,
    getGroups,
  })
  async function getGroups() {
    const {data: {groups}} = await axios({
      method: 'GET',
      headers,
      url: `${baseUrl}/get_groups`
    })
    return groups
  }
  async function createExpense(expense) {
    /*
    const expense = {
      users: [
        {user_id: 48503343}
      ],
      cost: "10",
      description: "Tests",
      details: "notes",
      date: new Date().toISOString(),
      repeat_interval: "never",
      currency_code: "BRL",
      group_id: parseInt(defaultGroupId),
      split_equally: true
    }
    const expense = {
      "cost": "25",
      "description": "Grocery run",
      "details": "incididunt fugiat in",
      "date": "2012-05-02T13:00:00Z",
      "repeat_interval": "yearly",
      "currency_code": "USD",
      "category_id": 15,
      "group_id": parseInt(defaultGroupId),
      "split_equally": true
    }
    */
    /*
    const {data: user} = await axios({
      method: 'GET',
      url: `${baseUrl}/get_current_user`,
      headers: {
        "Authorization": `Bearer ${apiKey}`
      }
    })
    return user
    */
    const {data: response} = await axios({
      method: 'POST',
      url: `${baseUrl}/create_expense`,
      headers,
      data: expense,
    })
    return response
  }
}
