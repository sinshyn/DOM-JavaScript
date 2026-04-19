import { TYPE_ERROR } from "./constants.js";
function log(data, type = TYPE_ERROR) {
  return console[type](data);
}
export default log;
