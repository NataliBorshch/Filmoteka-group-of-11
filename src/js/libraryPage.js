import movieGalleryMarkup from '../templates/myFilmLibraryPage.hbs';

const refs = {
  libraryList: document.getElementsByClassName('library'),
  watchedButton: document.getElementsByClassName('js-btn-watched'),
  queueButton: document.getElementsByClassName('js-btn-queue'),
};

function addWatchedFilmList() {
  let watchedMovieCards = localStorage.getItem('filmsWatched')
    ? JSON.parse(localStorage.getItem('filmsWatched'))
    : [];
  if (watchedMovieCards.length == 0) {
    refs.libraryList.insertAdjacentElement(
      'beforeend',
      `<div class="no-list">
            <h2 class="no-list__item">“You do not have watched movies. Add them.”</h2>
        </div>`,
    );
  } else {
    refs.libraryList.innerHTML = '';
    watchedMovieCards.forEach(movie => {
      const movieGallery = movieGalleryMarkup(movie);
      refs.libraryList.insertAdjacentHTML('beforeend', movieGallery);
    });
  }
}

function addQueueFilmList() {
  let queueMovieCards = localStorage.getItem('filmsQueue')
    ? JSON.parse(localStorage.getItem('filmsQueue'))
    : [];
  if (queueMovieCards.length === 0) {
    return refs.libraryList.insertAdjacentElement(
      'beforeend',
      `<div class="no-list">
            <h2 class="no-list__item">You do not have to queue movies to watch. Add them.</h2>
        </div>`,
    );
  } else {
    refs.libraryList.innerHTML = '';
    queueMovieCards.forEach(movie => {
      const movieGallery = movieGalleryMarkup(movie);
      refs.libraryList.insertAdjacentHTML('beforeend', movieGallery);
    });
  }
}
refs.watchedButton.addEventListener('click', addWatchedFilmList);
refs.queueButton.addEventListener('click', addQueueFilmList);
