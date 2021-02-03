import './sass/main.scss';
import { refs } from './js/refs';
import curentPage from './js/initialHomePage';
import apiService from './js/service';
import { getdetailsPage } from './js/filmDetailsPage';

// console.log(refs);

// отправляем запрос по сабмину формы

refs.formRef.addEventListener('submit', event => {
  event.preventDefault();

  const value = refs.refsInput.value;
  apiService.resetPage();
  apiService.getFetch(value, refs.GalleryRefs);
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

