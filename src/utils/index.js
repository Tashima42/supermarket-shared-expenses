import buildHttp from "./http.js"
import buildHtmlParser from "./html-parser.js"

const http = buildHttp()
const htmlParser = buildHtmlParser()

export {
  http,
  htmlParser,
}
