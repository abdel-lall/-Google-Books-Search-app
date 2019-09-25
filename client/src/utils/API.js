import Axios from "axios";

export default {
  
  SearchBooks: function(title) {
    return Axios.get(`https://www.googleapis.com/books/v1/volumes?q=+intitle:${title}&key=AIzaSyBi-uCQOGBA5yCPrPBdZCietMpxxjSu_mU`);
  },
};