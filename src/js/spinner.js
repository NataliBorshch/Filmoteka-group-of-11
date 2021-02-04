import { Spinner } from 'spin.js';
import { refs } from './refs';

const opts = {
  lines: 20,
  length: 40,
  width: 4,
  radius: 25,
  scale: 0.55,
  corners: 1,
  speed: 1.2,
  rotate: 29,
  animation: 'spinner-line-shrink',
  direction: 1,
  color: '#ff6b01',
  fadeColor: 'transparent',
  top: '49%',
  left: '49%',
  shadow: '0 0 1px transparent',
  zIndex: 2000000000,
  className: 'spinner',
  position: 'absolute',
};

export const spinner = new Spinner(opts).spin(refs.loader);

// spinner.stop(); // метод скрыть спиннеp

// refs.loader.classList.add('is-hidden'); //выключить

// refs.loader.classList.remove('is-hidden'); // включить
