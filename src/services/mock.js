import AxiosMockAdapter from "axios-mock-adapter";
import axios from "#/services/axios";

let mock = null;

if (process.env.NODE_ENV === "development") {
  mock = new AxiosMockAdapter(axios);
}

export default mock;