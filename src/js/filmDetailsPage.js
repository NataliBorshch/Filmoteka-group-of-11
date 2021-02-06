import { refs } from './refs';
import TemplateDetailPage from '../templates/modal.hbs';
import {eventKeyDown , closeModal } from './closeModal';
import {localStorageW} from './LocalStoreg';


// console.log(refs);
// const arrayIdQ = JSON.parse(localStorage.getItem(`queue`)) || [];
 let arrayIdW = [];


// console.log(arrayIdQ)
// const getQueue = localStorage.getItem('queue');
// arrayIdQ.push(Number(getQueue));


async function getdetailsPage(id) {
  // event.preventDefault();
  const key = '42c4fa9c05708253e8c2f9a05f447e85';
  // console.log(id);
  const urlId = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`;
  const response = await fetch(urlId);
  const film = await response.json();
  const templateCardFilm = await TemplateDetailPage(film);
  const createCardFilm = await createDatails(refs.modalRefs, templateCardFilm);
  refs.modalRefs.classList.remove('is-hidden');
  refs.modalRefs.addEventListener('click', closeModal);
  document.addEventListener('keydown', eventKeyDown);
  const modalBtn = await {
    watch: document.getElementById('watch-add'),
    queue: document.getElementById('queue-add'),
    boxBtn: document.getElementById('modal-box-bnt'),
  }; 
  modalBtn.watch.addEventListener('click',event=>{
    event.preventDefault()
    localStorageW(event,film, arrayIdW, modalBtn.watch )

  });
}
















function createDatails(place, tepmlate) {
  return place.insertAdjacentHTML('beforeend', tepmlate);
}


export { getdetailsPage , createDatails  };
