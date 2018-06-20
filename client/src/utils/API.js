import axios from "axios";

const URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json"
const KEY = "a34aa992f2a7440695c1ba8eda249516";

export default {
  // Gets search
  getData: function(search) {
    return axios.get(`${URL}?q=${search}&api-key=${KEY}`);
  },
  getArticles: function() {
    return axios.get("/api/articles");
  },
  saveArticles: function(Article) {
    return axios.post("/api/articles", Article);
  },
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  }
};