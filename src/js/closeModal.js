
import {refs}  from './refs';

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
    refs.modalRefs.removeEventListener('click', closeModal);
    modal.classList.add('is-hidden');
    refs.modalRefs.innerHTML = '';
    
  };

  export{closeModal , eventKeyDown};