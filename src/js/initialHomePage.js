import { refs } from './refs';

export default function createClassList(event) {
  if (event.target.nodeName !== 'A') {
    return;
  }
  if (event.target.textContent === 'Home') {
    refs.boxInputRef.classList.remove('is-hidden');
    refs.bntLibraryRef.classList.add('is-hidden');
    refs.linkHome.classList.add('activ');
    refs.linkLibrary.classList.remove('activ');
    refs.headerImgRef.classList.remove('library-background');
    refs.headerImgRef.classList.add('home-background');
  }
  if (event.target.textContent === 'my library') {
    refs.boxInputRef.classList.add('is-hidden');
    refs.bntLibraryRef.classList.remove('is-hidden');
    refs.linkLibrary.classList.add('activ');
    refs.linkHome.classList.remove('activ');
    refs.headerImgRef.classList.remove('home-background');
    refs.headerImgRef.classList.add('library-background');
  }
}
