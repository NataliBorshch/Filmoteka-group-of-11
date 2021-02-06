
import { refs } from './refs';

 import {parseW ,  parseQ , createDatails} from './filmDetailsPage';
import chosenFilm from '../templates/chosenFilm.hbs';


console.log(parseW)

export default function createClassList(event) {
  if (event.target.nodeName !== 'A') {
    return;
  }
  if (event.target.ariaLabel === 'home-page') {
    refs.formRef.classList.remove('is-hidden');
    refs.bntLibraryRef.classList.add('is-hidden');
    refs.linkHome.classList.add('activ');
    refs.linkLibrary.classList.remove('activ');
    refs.headerImgRef.classList.remove('library-background');
    refs.headerImgRef.classList.add('home-background');
  }
  if (event.target.ariaLabel === 'library-page') {
    
    refs.formRef.classList.add('is-hidden');
    refs.bntLibraryRef.classList.remove('is-hidden');
    refs.linkLibrary.classList.add('activ');
    refs.linkHome.classList.remove('activ');
    refs.headerImgRef.classList.remove('home-background');
    refs.headerImgRef.classList.add('library-background');
    changePage(parseW ,  parseQ  , refs.GalleryRefs )
    // clearPage(refs.GalleryRefs);
    // ShowLibaryWatch();
    // currentPage(parseW, parseQ, refs.GalleryRefs)
  //  const Templatescurrent = currentPage(parseW, parseQ);
  //  console.log(Templatescurrent)
    
    

  }
  // console.dir(event.target.nodeName);
}


// чистим страницу

function clearPage(place){
   return place.innerHTML = '';
}


// опеределяем какой шаблон прийдет
function currentTemplates(array){
  let templates;
  if (array.length === 0 ){
    templates  = `<h2 class ='empty-library'>Your library has not been created</h2><img src= "https://ik.imagekit.io/s2fpg15d4rx/_______-___-___-_______-_-________-____-88703729_EYiOdImPl4fH.jpg"/>`;
  }
   else{
     templates = chosenFilm(array)
   }
  return templates;
}



async function changePage(parseW ,  parseQ , place){
  const clear = await clearPage(place);
  const templatesW = await currentTemplates(parseW);
  const templatesQ = await currentTemplates(parseQ)
  const pageWatch = await ShowWatch(place, templatesW)
  // console.log(templatesW)
  // console.log(templatesQ)
  // const createCards = await 

}




function ShowWatch(plase, templates,){
  refs.watchBtn.classList.add('activ');
  refs.queueBtn.classList.remove('activ');
  createDatails(plase, templates)
}


// function ShowQueut