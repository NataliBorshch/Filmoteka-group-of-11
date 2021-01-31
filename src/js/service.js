// import TemplatesGallery from '../templates/myFilmLibraryPage.hbs';

// export default {
//   query: '',
//   baseUrl: 'https://api.themoviedb.org/3/search/movie',
//   get queryValue() {
//     return this.query;
//   },
//   set queryValue(value) {
//     return (this.query = value);
//   },

//   getFetch(value = this.query, place) {
//     const key = '19751292-0e322ad2a3bf93179a3983749fdc0c73';
//     this.queryValue = value;
//     const url = `?api_key=${key}&query=${value}&page=${1}`;
//     return fetch(url)
//       .then(res => res.json())
//       .then(data => {
//         const { results } = data;
//         const markup = TemplatesGallery(results);
//         console.log(markup)
//         place.insertAdjacentHTML('beforeend', markup);
//       });
//   },
// };
