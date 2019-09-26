import Axios from "axios";

export default {
  
  SearchBooks: function(title) {
    return Axios.get(`https://www.googleapis.com/books/v1/volumes?q=+intitle:${title}&key=AIzaSyBi-uCQOGBA5yCPrPBdZCietMpxxjSu_mU`);
  },
  saveBook: function(bookData) {
    return Axios.post("/api/books", bookData);
  },
  getBooks: function() {
    return Axios.get("/api/books");
  },
  deleteBooks: function(id) {
    return Axios.delete("/api/books/"+id);
  }
};