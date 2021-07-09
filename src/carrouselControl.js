// import images
import { sleep } from './helperFunctions';
import One from './images/1.jpg';
import Two from './images/2.jpeg';
import Three from './images/3.jpeg';
import Four from './images/4.jpeg';
import Five from './images/5.jpeg';

// Create Array of Images
const arrayOfImagesThatWillCycle = [One, Two, Three, Four, Five];

// Set displayedImage = last element of arrayOfImagesThatWillCycle
let displayedImage = arrayOfImagesThatWillCycle[4];

// Get array of Nodes of navigation circles
const arrayOfCircles = document.querySelectorAll('span');

// Identify each circle with an unique id
let circleCount = 0;
arrayOfCircles.forEach(circle => {
  circle.id = circleCount;
  circleCount++;
  // add click listener for each circle
  circle.addEventListener('click', function (event) {
    // get index of image being displayed right now
    let currentIndex = arrayOfImagesThatWillCycle.indexOf(displayedImage);

    // remove circle highlight of that image
    arrayOfCircles[currentIndex].classList.remove('dotHighlight');

    // based on the circle the user clicked, show the corresponding image
    let chosenIndex = event.target.id;
    carrouselControl.nextImageInCarrousel(chosenIndex);
  });
});

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
      nextImageInCarrousel();

      imageToChange.classList.add('easeIn');

      await sleep(6000);

      imageToChange.classList.remove('easeIn');

      imageToChange.classList.add('easeOut');

      await sleep(1000);

      imageToChange.classList.remove('easeOut');
    }
  };

  const nextImageInCarrousel = optionalGoToIndex => {
    // Find out what image is being displayed right now
    let currentIndex = arrayOfImagesThatWillCycle.indexOf(displayedImage);
    let nextIndex = currentIndex + 1;

    // If user clicked a circle, set that circle's index as the nextIndex for the image
    if (optionalGoToIndex !== undefined) {
      nextIndex = optionalGoToIndex;
    }

    // If nextIndex goes over the array length, reset displayedImage to be the first element
    if (nextIndex >= arrayOfImagesThatWillCycle.length) {
      displayedImage = arrayOfImagesThatWillCycle[0];
      arrayOfCircles[4].classList.remove('dotHighlight');
      arrayOfCircles[0].classList.add('dotHighlight');
    }
    // else, set displayedImage to be nextIndex
    else {
      displayedImage = arrayOfImagesThatWillCycle[nextIndex];
      if (nextIndex > 0) {
        arrayOfCircles[nextIndex - 1].classList.remove('dotHighlight');
      }
      arrayOfCircles[nextIndex].classList.add('dotHighlight');
    }
    imageToChange.setAttribute('src', displayedImage);
  };

  const previousImageInCarrousel = () => {
    // Find out what image is displayed right now
    let currentIndex = arrayOfImagesThatWillCycle.indexOf(displayedImage);
    let previousIndex = currentIndex - 1;

    // If previousIndex < 0, reset displayedImage to be the last element
    if (previousIndex < 0) {
      displayedImage =
        arrayOfImagesThatWillCycle[arrayOfImagesThatWillCycle.length - 1];
      arrayOfCircles[0].classList.remove('dotHighlight');
      arrayOfCircles[arrayOfCircles.length - 1].classList.add('dotHighlight');
    }
    // else, set displayedImage to be previousIndex
    else {
      displayedImage = arrayOfImagesThatWillCycle[previousIndex];
      arrayOfCircles[previousIndex + 1].classList.remove('dotHighlight');
      arrayOfCircles[previousIndex].classList.add('dotHighlight');
    }
    imageToChange.setAttribute('src', displayedImage);
  };

  return {
    setLoopTo: setLoopTo,
    autoScrollLoop: autoScrollLoop,
    nextImageInCarrousel: nextImageInCarrousel,
    previousImageInCarrousel: previousImageInCarrousel
  };
})();
