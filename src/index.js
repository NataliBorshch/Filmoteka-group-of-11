import './sass/main.scss';
import { refs } from './js/refs';
import curentPage from './js/initialHomePage';
import serviseApi from './js/service';

import * as basicLightbox from 'basiclightbox';
import '../node_modules/basiclightbox/dist/basicLightbox.min.css';
import spinner from './js/spinner';

// console.log(refs)

// refs.formRef.addEventListener('submit',event=>{
//   event.preventDefault();
//   console.dir(refs.refsInput.value);
//   const value = refs.refsInput.value
//   serviseApi.getFetch(value,refs.GalleryRefs).then(data=> console.log(data))
// })

// меняет стили Home и library
refs.navRefs.addEventListener('click', event => {
  event.preventDefault();
  curentPage(event);
});
