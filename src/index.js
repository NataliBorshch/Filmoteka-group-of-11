import './sass/main.scss';
import { refs } from './js/refs';
import curentPage from './js/initialHomePage';
import CreateNumberItems from './js/slicePage';

import TemplatesLibrary   from './templates/myFilmLibraryPage.hbs';

import FetchQueryApiService from './js/service.js';
import { getdetailsPage  , createDatails } from './js/filmDetailsPage';

const full_URL_Image = 'https://image.tmdb.org/t/p/w220_and_h330_face';

const fetchQueryApiService = new FetchQueryApiService();
fetchQueryApiService.fetchArticles('').then(data=>{
  const windowInnerWidth = window.innerWidth;
 const ArrayUrl =  CreateNumberItems(data , windowInnerWidth);
ArrayUrl.map(ele=>{
   fetch(ele).then(response=>response.json()).then(data=>{  
    // refs.GalleryRefs.innerHTML='';   
     createDatails(refs.GalleryRefs,TemplatesLibrary(data))
   })
 })
})

// отправляем запрос по сабмину формы

refs.formRef.addEventListener('submit', event => {
  event.preventDefault();
  let value = refs.refsInput.value.trim()||'';
  fetchQueryApiService.fetchArticles(value).then(data => {
    refs.GalleryRefs.innerHTML='';
    const windowInnerWidth = window.innerWidth;
    const ArrayUrl =  CreateNumberItems(data , windowInnerWidth);
    // console.log(data);
    ArrayUrl.map(ele => {
      fetch(ele)
        .then(response => response.json())
        .then(data => {
          console.log(data);
         
 createDatails(refs.GalleryRefs,TemplatesLibrary(data))
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
  // console.dir(event.target.id);
  console.dir(event.target);
  const value = event.target.id;
  getdetailsPage(value);
});

// console.log(refs);

