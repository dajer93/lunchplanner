import axios from "axios";

export default axios.create({
  baseURL: `http://localhost:8089`, // the url of our server
  headers: {
    "Content-Type": "application/json",
  },
});
