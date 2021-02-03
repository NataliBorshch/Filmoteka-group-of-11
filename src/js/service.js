import TemplatesGallery from '../templates/myFilmLibraryPage.hbs';

export default {
  query: '',
  baseUrl: 'https://api.themoviedb.org/3/search/movie',
  get queryValue() {
    return this.query;
  },
  set queryValue(value) {
    return (this.query = value);
  },

  getFetch(value = this.query, place) {
    const key = '42c4fa9c05708253e8c2f9a05f447e85';
    this.queryValue = value;
    const url = `${this.baseUrl}?api_key=${key}&query=${value}&page=${1}`;
    return fetch(url)
      .then(res => res.json())
      .then(data => {
        const { results } = data;
        console.log(results);
        const newArrayResult = results.slice(0, 9);
        const markup = TemplatesGallery(newArrayResult);
        place.insertAdjacentHTML('beforeend', markup);
      });
  },
};
