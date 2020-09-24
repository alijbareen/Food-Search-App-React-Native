const { default: Axios } = require("axios");

import axios from "axios";

export default axios.create({
  baseURL: "GET https://api.yelp.com/v3/businesses",
});
