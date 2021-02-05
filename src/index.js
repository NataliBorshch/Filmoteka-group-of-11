import './sass/main.scss';
import { refs } from './js/refs';
import curentPage from './js/initialHomePage';
import FetchQueryApiService from './js/service.js';
import { getdetailsPage } from './js/filmDetailsPage';

const full_URL_Image = 'https://image.tmdb.org/t/p/w220_and_h330_face';
const fetchQueryApiService = new FetchQueryApiService();

// отправляем запрос по сабмину формы

refs.formRef.addEventListener('submit', event => {
  event.preventDefault();
  let value = refs.refsInput.value;
  fetchQueryApiService.fetchArticles(value).then(data => {
    // console.log(data);
    data.map(ele => {
      fetch(ele)
        .then(response => response.json())
        .then(data => {
          // console.log(data);
          let myGenger = data.genres.map(el => el.name);
          let backdrop_path = full_URL_Image + data.backdrop_path;
          let original_title = data.original_title;
          let overview = data.overview;
          let popularity = data.popularity;
          let poster_path = full_URL_Image + data.poster_path;
          let release_date = data.release_date;
          let title = data.title;
          let vote_average = data.vote_average;
          let vote_count = data.vote_count;
          console.log(
            myGenger,
            backdrop_path,
            original_title,
            overview,
            popularity,
            poster_path,
            release_date,
            title,
            vote_average,
            vote_count,
          );
        });
    });
  });
});

// меняет стили Home и library

refs.navRefs.addEventListener('click', event => {
  event.preventDefault();
  curentPage(event);
});

// открытие и закрытие модалки

refs.GalleryRefs.addEventListener('click', event => {
  event.preventDefault();
  if (event.target.tagName !== 'IMG') {
    return;
  }
  console.dir(event.target.id);
  console.dir(event.target);
  const value = event.target.id;
  getdetailsPage(value);
});

console.log(refs);
