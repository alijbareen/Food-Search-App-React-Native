import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer OqN0w5ndPHfGzudh9rcuBQ1TVTs3mG8FkfRn7yHV4gtCndWaKgWUt8LjGvchbwlE4vILXaaMnpQP-SIW4-gyO7I7LYsD9yp0LcBcd1qP8SXwRgZRW5TJxSMGoaZsX3Yx",
  },
});
