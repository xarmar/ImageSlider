// import images
import { sleep } from './helperFunctions';
import One from './images/1.jpg';
import Two from './images/2.jpeg';
import Three from './images/3.jpeg';
import Four from './images/4.jpeg';
import Five from './images/5.jpeg';

// Create Array of Images
const arrayOfImagesThatWillCycle = [One, Two, Three, Four, Five];

// Set displayedImage = first element of arrayOfImagesThatWillCycle
let displayedImage = arrayOfImagesThatWillCycle[0];

// Identify <img> element and set it's image to displayedImage
const imageToChange = document.querySelector('#image');
imageToChange.setAttribute('src', displayedImage);

export var loop = true;

export const setLoopTo = boolean => {
  loop = boolean;
};

export const carrouselControl = (() => {
  const autoScrollLoop = async () => {
    while (loop) {
      // eslint-disable-line no-constant-condition
      nextImageInCarrousel(false);

      imageToChange.classList.add('easeIn');

      await sleep(6000);

      imageToChange.classList.remove('easeIn');

      imageToChange.classList.add('easeOut');

      await sleep(1000);

      imageToChange.classList.remove('easeOut');
    }
  };

  const nextImageInCarrousel = arrowClicked => {
    // Find out what image is displayed right now
    let currentIndex = arrayOfImagesThatWillCycle.indexOf(displayedImage);
    let nextIndex = currentIndex + 1;

    // If nextIndex goes over the array length, reset displayedImage to be the first element
    if (nextIndex > arrayOfImagesThatWillCycle.length - 1) {
      displayedImage = arrayOfImagesThatWillCycle[0];
    }
    // else, set displayedImage to be nextIndex
    else {
      displayedImage = arrayOfImagesThatWillCycle[nextIndex];
    }
    imageToChange.setAttribute('src', displayedImage);
    if (arrowClicked) {
      loop = false;
    }
  };

  const previousImageInCarrousel = arrowClicked => {
    // Find out what image is displayed right now
    let currentIndex = arrayOfImagesThatWillCycle.indexOf(displayedImage);
    let previousIndex = currentIndex - 1;

    // If previousIndex < 0, reset displayedImage to be the last element
    if (previousIndex < 0) {
      displayedImage =
        arrayOfImagesThatWillCycle[arrayOfImagesThatWillCycle.length - 2];
    }
    // else, set displayedImage to be previousIndex
    else {
      displayedImage = arrayOfImagesThatWillCycle[previousIndex];
    }
    imageToChange.setAttribute('src', displayedImage);
    if (arrowClicked) {
      loop = false;
    }
  };

  return {
    setLoopTo: setLoopTo,
    autoScrollLoop: autoScrollLoop,
    nextImageInCarrousel: nextImageInCarrousel,
    previousImageInCarrousel: previousImageInCarrousel
  };
})();
