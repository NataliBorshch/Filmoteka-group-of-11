import { refs } from './refs';
import TemplateDetailPage from '../templates/modal.hbs';
import { eventKeyDown, closeModal } from './closeModal';

export let parseW = JSON.parse(localStorage.getItem('watch')) || [];
export let parseQ = JSON.parse(localStorage.getItem('queue')) || [];

async function getdetailsPage(id) {
  const key = '42c4fa9c05708253e8c2f9a05f447e85';
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
  const IndexItemW = await ChangeTextBtnW(parseW, film, modalBtn.watch);
  const IndexItemQ = await ChangeTextBtnQ(parseQ, film, modalBtn.queue);

  modalBtn.watch.addEventListener('click',event=>{
    parseW =  JSON.parse(localStorage.getItem('watch')) || [];
    if (event.target.textContent === 'remove from watch'){
       parseW.splice(IndexItemW, 1)
      localStorage.setItem('watch', JSON.stringify(parseW))
      event.target.textContent='add to Watched';  
      modalBtn.watch.classList.remove('activ')
    }
    else{
      parseW.push(film)
      localStorage.setItem('watch', JSON.stringify(parseW))
      ChangeTextBtnW(parseW, film, modalBtn.watch)
      modalBtn.watch.classList.add('activ')
      event.target.textContent ==='remove from watch';
    }
  });

//  кнопка  Q
  modalBtn.queue.addEventListener('click',event=>{
    event.preventDefault()   
    if (event.target.textContent === 'remove from queue'){
       parseQ.splice(IndexItemQ, 1)
       event.target.textContent === 'add to queue';
       modalBtn.queue.classList.remove('activ')
      localStorage.setItem('queue', JSON.stringify(parseQ))
      ChangeTextBtnQ(parseQ, film, modalBtn.queue)
    }
    else{
      parseQ.push(film)
      ChangeTextBtnQ(parseQ, film, modalBtn.queue)
      event.target.textContent === 'remove from queue';
      modalBtn.queue.classList.add('activ')
      localStorage.setItem('queue', JSON.stringify(parseQ))
    }
  });
}

// находим индекс елемента который есть в локар сторедж для watch
function ChangeTextBtnW(parseJson, film, btnWatch) {
  let arrayId = parseJson.map(ele => ele.id);
  let indexW = arrayId.indexOf(film.id);
  if (indexW === -1) {
    btnWatch.textContent = 'add to Watched';
    btnWatch.classList.remove('activ')
    return;
  } else {
    btnWatch.textContent = 'remove from watch';
    btnWatch.classList.add('activ')
  }
  return indexW;
}

// для Q
function ChangeTextBtnQ(parseJson, film, btn) {
  let arrayId = parseJson.map(ele => ele.id);
  let indexQ = arrayId.indexOf(film.id);
  if (indexQ === -1) {
    btn.textContent = 'add to queue';
    btn.classList.remove('activ')
    return;
  } else {
    btn.textContent = 'remove from queue';
    btn.classList.add('activ')
  }
  return indexQ;
}

// создаем разметку
function createDatails(place, tepmlate) {
  return place.insertAdjacentHTML('beforeend', tepmlate);
}

export { getdetailsPage, createDatails };
