import './sass/main.scss';
import { refs } from './js/refs';
import curentPage from './js/initialHomePage';
import CreateNumberItems from './js/slicePage';
import { hideSlider, showSlider } from './js/spinner';
import TemplatesLibrary from './templates/myFilmLibraryPage.hbs';
import FetchQueryApiService from './js/service.js';
import { getdetailsPage, createDatails } from './js/filmDetailsPage';

const full_URL_Image = 'https://image.tmdb.org/t/p/w220_and_h330_face';

const fetchQueryApiService = new FetchQueryApiService();

fetchQueryApiService.fetchArticles('').then(data => {
  const windowInnerWidth = window.innerWidth;
  const ArrayUrl = CreateNumberItems(data, windowInnerWidth);
  ArrayUrl.map(ele => {
    fetch(ele)
      .then(response => response.json())
      .then(async data => {
        let id = await data.id;
        let genres = await data.genres.map(el => el.name);
        let backdrop_path = await data.backdrop_path;
        let original_title = await data.original_title;
        let overview = await data.overview;
        let popularity = await data.popularity;
        let poster_path = await data.poster_path;
        let release_date = await data.release_date.slice(0, 4);
        let title = await data.title;
        let vote_average = await data.vote_average;
        let vote_count = await data.vote_count;

        createDatails(
          refs.GalleryRefs,
          TemplatesLibrary({
            id,
            genres,
            backdrop_path,
            original_title,
            overview,
            popularity,
            poster_path,
            release_date,
            title,
            vote_average,
            vote_count,
          }),
        );
      })
      .catch(err => console.log(err));
  });
});

// отправляем запрос по сабмину формы

refs.formRef.addEventListener('submit', event => {
  event.preventDefault();
  let value = refs.refsInput.value.trim() || '';
  fetchQueryApiService.fetchArticles(value).then(data => {
    refs.GalleryRefs.innerHTML = '';
    const windowInnerWidth = window.innerWidth;
    const ArrayUrl = CreateNumberItems(data, windowInnerWidth);
    showSlider();
    setTimeout(hideSlider, 500);
    ArrayUrl.map(ele => {
      fetch(ele)
        .then(response => response.json())
        .then(async data => {
          let id = await data.id;
          let genres = await data.genres.map(el => el.name);
          let backdrop_path = await data.backdrop_path;
          let original_title = await data.original_title;
          let overview = await data.overview;
          let popularity = await data.popularity;
          let poster_path = await data.poster_path;
          let release_date = await data.release_date.slice(0, 4);
          let title = await data.title;
          let vote_average = await data.vote_average;
          let vote_count = await data.vote_count;

          createDatails(
            refs.GalleryRefs,
            TemplatesLibrary({
              id,
              genres,
              backdrop_path,
              original_title,
              overview,
              popularity,
              poster_path,
              release_date,
              title,
              vote_average,
              vote_count,
            }),
          );
        })
        .catch(err => console.log(err));
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
  const value = event.target.id;
  getdetailsPage(value);
});

setTimeout(hideSlider, 500);
