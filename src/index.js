require('./styles.scss');
import { carrouselControl, setLoopTo } from './carrouselControl';
import { sleep } from './helperFunctions';

// Identify Left Arrow and Add event Listener
const leftArrow = document.querySelector('#leftArrow');
leftArrow.addEventListener('click', function () {
  carrouselControl.previousImageInCarrousel(true);
  sleep(5000);
  setLoopTo(true);
});

// Identify Right Arrow and Add event Listener
const rightArrow = document.querySelector('#rightArrow');
rightArrow.addEventListener('click', function () {
  carrouselControl.nextImageInCarrousel(true);
  sleep(5000);
  setLoopTo(true);
});

carrouselControl.autoScrollLoop();
