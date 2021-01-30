import './sass/main.scss';
import { refs } from './js/refs';
import templates from './js/initialHomePage';

import * as basicLightbox from 'basiclightbox';
import '../node_modules/basiclightbox/dist/basicLightbox.min.css';

refs.linkRefs.addEventListener('click', event => {
  event.preventDefault();
  templates(event);
});
