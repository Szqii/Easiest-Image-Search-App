const API_KEY = process.env.VUE_APP_IMAGE_API_KEY;
const API_URL = 'https://api.unsplash.com/search/photos?&per_page=30';


export default {
  async search(searchTerm) {
    const randomPage = Math.floor(Math.random()*3)+1
    return fetch(`${API_URL}&query=${searchTerm}&client_id=${API_KEY}&page=${randomPage}`)
      .then(data => data.json())
      .then(data => data.results)
  },
};