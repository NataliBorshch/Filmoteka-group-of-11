import TemplatesGallery from '../templates/myFilmLibraryPage.hbs';

export default {
  numberPage: 1,
  query: '',
  baseUrl: 'https://api.themoviedb.org/3/search/movie',
  // popularUrl: 'https://api.themoviedb.org/3/movie/popular',
  get queryValue() {
    return this.query;
  },
  set queryValue(value) {
    return (this.query = value);
  },
  getFetch(value = this.query, place) {
    const key = '42c4fa9c05708253e8c2f9a05f447e85';
    this.queryValue = value;

    const popularUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`;
    const url = `${this.baseUrl}?api_key=${key}&query=${this.query}&page=${this.pageNumber}`;
    return fetch(popularUrl)
      .then(res => res.json())
      .then(data => {
        const { results } = data;
        console.log(results);
        const markup = TemplatesGallery(results);
        place.insertAdjacentHTML('beforeend', markup);
      });
  },
  // getPopularFetch(value = this.query, place) {
  //   const key = '42c4fa9c05708253e8c2f9a05f447e85';
  // },
  setPage() {
    this.numberPage += 1;
    return this.numberPage;
  },
  resetPage() {
    this.numberPage = 1;
    return this.numberPage;
  },
};

// if (this.query === '') {
//   return (url = `${this.popularUrl}?api_key=${key}&query=${this.query}&page=${this.pageNumber}`);
// }
