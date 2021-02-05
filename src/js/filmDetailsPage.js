import { refs } from './refs';
import TemplateDetailPage from '../templates/modal.hbs';

// console.log(refs);
const arrayIdQ = [];
const arrayIdW = [];


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
  // console.log(modalBtn);

  modalBtn.boxBtn.addEventListener('click', event => {
    if (event.target.nodeName !== 'BUTTON') {
      return;
    }
    if (event.target.id === 'queue-add') {
      localStorage.setItem('queue', `${id}`);
      const getQueue = localStorage.getItem('queue');
      event.target.textContent = 'remove to queue ';
      arrayIdQ.push(Number(getQueue));
    }
    if (event.target.id === 'watch-add') {
      localStorage.setItem('watch', `${id}`);
      const getWatch = localStorage.getItem('watch');
      event.target.textContent = 'remove to watch ';
      arrayIdW.push(Number(getWatch));
    }
    // console.log(id);
    // console.dir(event.target);
    console.log(arrayIdW);
    console.log(arrayIdQ);
  });
}


function createDatails(place, tepmlate) {
  return place.insertAdjacentHTML('beforeend', tepmlate);
}


const closeModal = event => {
  if (event.target.id !== 'modal') {
    return;
  }
  const modal = document.getElementById('modal');
  modal.classList.add('is-hidden');
  document.removeEventListener('keydown', eventKeyDown);
  refs.modalRefs.innerHTML = '';
};

const eventKeyDown = event => {
  if (event.code !== 'Escape') {
    return;
  }
  modal.classList.add('is-hidden');
  refs.modalRefs.innerHTML = '';
};

// console.log(urlId);

export { getdetailsPage , createDatails };
