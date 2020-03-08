import axios from 'axios'

let API_URL;

process.env.REACT_APP_STAGE === 'local'
  ? API_URL = 'http://localhost:8080'
  : API_URL = 'https://synonyms-search-api.herokuapp.com'

export default {
  addSynonyms: function(addSynonymsBody) {
    let url = `${API_URL}/synonyms/add`;
    return axios.post(url, addSynonymsBody);
  },
  searchSynonyms: function(word, depth) {
      let url = `${API_URL}/synonyms/search?word=${word}`;
      if(depth != null) {
          url += `&depth=${depth}`;
      }
      return axios.get(url);
  }
}