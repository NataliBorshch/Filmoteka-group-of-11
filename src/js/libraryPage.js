
import movieGalleryMarkup from '../templates/chosenFilm.hbs';
import {refs} from './refs';
import {createDatails} from './filmDetailsPage';


 function addWatchedFilmList(plase,watchedMovieCards) {
   let templates ;
  if (watchedMovieCards.length === 0) {
    plase.innerHTML = '';
     templates = `<h2 class="no-list__item">“You do not have watched movies. Add them.”</h2>
    <img src= "https://ik.imagekit.io/s2fpg15d4rx/_______-___-___-_______-_-________-____-88703729_EYiOdImPl4fH.jpg"/>`
    
  }
   else {
    plase.innerHTML = '';
    templates =  movieGalleryMarkup(watchedMovieCards)
    
  }
  return createDatails(plase,templates)
}

  function addQueueFilmList(plase,queueMovieCards) {
    let templates;
  if (queueMovieCards.length === 0) {
    plase.innerHTML = '';
    templates =  
            `<h2 class="no-list__item">You do not have to queue movies to watch. Add them.</h2>
            <img src= "https://ik.imagekit.io/s2fpg15d4rx/_______-___-___-_______-_-________-____-88703729_EYiOdImPl4fH.jpg"/>`;
  
  } else {
    plase.innerHTML = '';
    templates = movieGalleryMarkup(queueMovieCards)
  }
  return createDatails(plase,templates);
}



export{ addWatchedFilmList , addQueueFilmList};