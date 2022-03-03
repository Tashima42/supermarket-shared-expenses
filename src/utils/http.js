import axios from "axios"

export default function () {
  return Object.freeze({
    request
  })

  async function request(options) {
    return await axios(options)
  }
}
