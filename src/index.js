import './sass/main.scss';
import { refs } from './js/refs';
import curentPage from './js/initialHomePage';
import FetchQueryApiService from './js/service.js';
import { getdetailsPage } from './js/filmDetailsPage';

const fetchQueryApiService = new FetchQueryApiService();

// отправляем запрос по сабмину формы

refs.formRef.addEventListener('submit', event => {
  event.preventDefault();
  let value = refs.refsInput.value;
  fetchQueryApiService
    .fetchArticles(value)
    .then(data => console.log(data));
  
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
  // console.dir(event.target.id);
  // console.dir(event.target);
  const value = event.target.id;
  getdetailsPage(value);
});
