import bodyParser from "body-parser";
import util from "util";

export const getBody = util.promisify(bodyParser.urlencoded());
