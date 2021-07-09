require('./styles.scss');
import { carrouselControl } from './carrouselControl';

// Identify Left Arrow and Add event Listener
const leftArrow = document.querySelector('#leftArrow');
leftArrow.addEventListener('click', function () {
  carrouselControl.previousImageInCarrousel();
});

// Identify Right Arrow and Add event Listener
const rightArrow = document.querySelector('#rightArrow');
rightArrow.addEventListener('click', function () {
  carrouselControl.nextImageInCarrousel();
});

carrouselControl.autoScrollLoop();
