const app = require("./app.js")

const port = process.env.PORT || 3104

app.listen(port, () => {
  console.info("Server is listening on port ", port)
})
