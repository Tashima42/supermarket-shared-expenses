//import {parse} from 'node-html-parser'
import jsdom from "jsdom"
const {JSDOM} = jsdom

export default function () {
  return Object.freeze({
    parse,
  })
  function parse(htmlString) {
    return new JSDOM(htmlString)
  }
}
