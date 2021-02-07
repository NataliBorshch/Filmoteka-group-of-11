
import { refs } from './refs';
import {hideSlider , showSlider} from './spinner';
 import {parseW ,  parseQ , createDatails} from './filmDetailsPage';
 import { addWatchedFilmList , addQueueFilmList} from './libraryPage';
 import TemplatesLibrary   from '../templates/myFilmLibraryPage.hbs';
import FetchQueryApiService from './service.js';
import CreateNumberItems from './slicePage'

export default function createClassList(event) {
  if (event.target.nodeName !== 'A') {
    return;
  }
  if (event.target.ariaLabel === 'home-page') {
     setTimeout(showSlider,0)
     setTimeout(hideSlider , 500)
    refs.formRef.classList.remove('is-hidden');
    refs.bntLibraryRef.classList.add('is-hidden');
    refs.linkHome.classList.add('activ');
    refs.linkLibrary.classList.remove('activ');
    refs.headerImgRef.classList.remove('library-background');
    refs.headerImgRef.classList.add('home-background');
    refs.GalleryRefs.innerHTML='';
    const fetchQueryApiService = new FetchQueryApiService();
    fetchQueryApiService.fetchArticles('').then(data => {
      const windowInnerWidth = window.innerWidth;
      const ArrayUrl = CreateNumberItems(data, windowInnerWidth);
      ArrayUrl.map(ele => {
        fetch(ele)
          .then(response => response.json())
          .then(async data => {
            let id = await data.id;
            let genres = await data.genres.map(el => el.name);
            let backdrop_path = await data.backdrop_path;
            let original_title = await data.original_title;
            let overview = await data.overview;
            let popularity = await data.popularity;
            let poster_path = await data.poster_path;
            let release_date = await data.release_date.slice(0, 4);
            let title = await data.title;
            let vote_average = await data.vote_average;
            let vote_count = await data.vote_count;
    
            createDatails(
              refs.GalleryRefs,
              TemplatesLibrary({
                id,
                genres,
                backdrop_path,
                original_title,
                overview,
                popularity,
                poster_path,
                release_date,
                title,
                vote_average,
                vote_count,
              }),
            );
          })
          .catch(err => console.log(err));
      });
    });

   
  }
  if (event.target.ariaLabel === 'library-page') {
    setTimeout(showSlider,0)
    setTimeout(hideSlider , 500)
    refs.watchBtn.addEventListener('click', event=>{
      event.preventDefault();
      setTimeout(showSlider,0)
      setTimeout(hideSlider , 500)
      refs.watchBtn.classList.add('activ')
      refs.queueBtn.classList.remove('activ')
      if (event.target.id !== 'watch-btn'){
        return;
      }
      addWatchedFilmList(refs.GalleryRefs , parseW)
    })

    refs.queueBtn.addEventListener('click', event=>{
      event.preventDefault();
      setTimeout(showSlider,0)
      setTimeout(hideSlider , 500)
      refs.queueBtn.classList.add('activ')
      refs.watchBtn.classList.remove('activ')
      if (event.target.id !== 'queue-btn'){
        return;
      }
      addQueueFilmList(refs.GalleryRefs , parseQ)
    })
    
    refs.formRef.classList.add('is-hidden');
    refs.bntLibraryRef.classList.remove('is-hidden');
    refs.linkLibrary.classList.add('activ');
    refs.linkHome.classList.remove('activ');
    refs.headerImgRef.classList.remove('home-background');
    refs.headerImgRef.classList.add('library-background');
    refs.watchBtn.classList.add('activ')
    refs.queueBtn.classList.remove('activ')
    addWatchedFilmList(refs.GalleryRefs , parseW)
   
  }
  
}






