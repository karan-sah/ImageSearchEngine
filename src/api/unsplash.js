import axios from "axios";
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID f0c223bb16baacccf17b81db2893853d9fdee37b6957e5e59bde0fcd2d484ba7"
  }
});
