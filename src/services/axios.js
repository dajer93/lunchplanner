import axios from "axios";

export default axios.create({
  baseURL: `http://localhost:3000`, // the url of our server
  headers: {
    "Content-Type": "application/json",
  },
});
