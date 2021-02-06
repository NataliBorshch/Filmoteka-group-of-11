import { refs } from './refs';
import TemplateDetailPage from '../templates/modal.hbs';
import {eventKeyDown , closeModal } from './closeModal';



let parseW =  JSON.parse(localStorage.getItem('watch')) || [] ;
// console.log(parseW)
let parseQ = JSON.parse(localStorage.getItem('queue')) || [];

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


  // кнопка добавитьв просмотренные W
  const IndexItemW  = await ChangeTextBtn(parseW,film,modalBtn.watch);
  const IndexItemQ  = await ChangeTextBtn(parseW,film,modalBtn.queue);
  modalBtn.watch.addEventListener('click',event=>{
    event.preventDefault()   
    if (event.target.textContent === 'remove to watch'){
       parseW.splice(IndexItemW, 1)
      console.log(parseW)
      localStorage.setItem('watch', JSON.stringify(parseW))
      ChangeTextBtn(parseW, film, modalBtn.watch)
      
    }
    else{
      parseW.push(film)
      ChangeTextBtn(parseW, film, modalBtn.watch)
      localStorage.setItem('watch', JSON.stringify(parseW))
    }
  });

//  кнопка добавитьв Q
  modalBtn.queue.addEventListener('click',event=>{
    event.preventDefault()   
    if (event.target.textContent === 'remove to queue'){
       parseQ.splice(IndexItemQ, 1)
      console.log(parseQ)
      localStorage.setItem('queue', JSON.stringify(parseQ))
      ChangeTextBtnQ(parseQ, film, modalBtn.queue)
     
    }
    else{
      parseQ.push(film)
      ChangeTextBtnQ(parseQ, film, modalBtn.queue)
      localStorage.setItem('queue', JSON.stringify(parseQ))
    }
  });



  // console.log(parseW)
}









// находим индекс елемента который есть в локар сторедж для watch

function ChangeTextBtn(parseJson, film,btnWatch){
  if (parseJson.length < 1){
    btnWatch.textContent = 'add to Watched'
    return;
  }
  let indexW = 0;
  parseJson.forEach((elem,index) => {
      if (elem.id === film.id ){
          btnWatch.textContent = 'remove to watch';
          indexW = index;  
      }
      else{
        btnWatch.textContent = 'add to Watched'
      }
  });
  return indexW;
}



// для Q

function ChangeTextBtnQ(parseJson, film,btn){
  if (parseJson.length < 1){
    btn.textContent = 'add to queue';
    return;
  }
  let indexQ = 0;

  parseJson.forEach((elem,index) => {
      if (elem.id === film.id ){
        btn.textContent = 'remove to queue';
          indexQ = index;  
      }
      else{
        btn.textContent = 'add to queue'
      }
  });

//  console.log(indexW)

  return indexQ;
}








// создаем разметку 

function createDatails(place, tepmlate) {
  return place.insertAdjacentHTML('beforeend', tepmlate);
}


export { getdetailsPage , createDatails  };
