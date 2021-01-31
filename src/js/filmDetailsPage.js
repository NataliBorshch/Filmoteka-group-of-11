import { refs } from './refs';
import TemplateDetailPage from '../templates/detailsPage.hbs';

console.log(refs);

function getdetailsPage(id) {
  const key = '42c4fa9c05708253e8c2f9a05f447e85';

  const urlId = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`;
  return fetch(urlId)
    .then(res => res.json())
    .then(data => {
      const template = TemplateDetailPage(data);
      createDatails(refs.modalRefs, template);
      modal.classList.remove('is-hidden');
      refs.modalRefs.addEventListener('click', closeModal);
      document.addEventListener('keydown', eventKeyDown);
    })
    .catch(console.error);
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
};

const eventKeyDown = event => {
  if (event.code !== 'Escape') {
    return;
  }
  modal.classList.add('is-hidden');
};

export { getdetailsPage };

// const btn = document.getElementById('watch-add');
