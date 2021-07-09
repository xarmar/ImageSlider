require('./styles.scss');
import One from './images/1.jpg';
import Two from './images/2.jpeg';
import Three from './images/3.jpeg';
import Four from './images/4.jpeg';
import Five from './images/5.jpeg';

// Identify Image Element
const imageToChange = document.querySelector('#image');

// Create Array of Images
const arrayOfImagesThatWillCycle = [One, Two, Three, Four, Five];

let imageLink = arrayOfImagesThatWillCycle[0];
imageToChange.setAttribute('src', imageLink);

const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const nextImage = () => {
  // Find out what image is displayed right now
  let currentIndex = arrayOfImagesThatWillCycle.indexOf(imageLink);
  let nextIndex = currentIndex + 1;

  // If nextIndex goes over the array length, reset imageLink to be the first element
  if (nextIndex > arrayOfImagesThatWillCycle.length - 1) {
    imageLink = arrayOfImagesThatWillCycle[0];
  }
  // else, set imageLink to be nextIndex
  else {
    imageLink = arrayOfImagesThatWillCycle[nextIndex];
  }
  imageToChange.setAttribute('src', imageLink);
};

// const previousImage = () => {
//   // Find out what image is displayed right now
//   let currentIndex = arrayOfImagesThatWillCycle.indexOf(imageLink);
//   let previousIndex = currentIndex - 1;

//   // If previousIndex is < 0, set imageLink to be the last element
//   if (previousIndex < 0) {
//     imageLink = arrayOfImagesThatWillCycle[arrayOfImagesThatWillCycle.length];
//   }
//   // else, set imageLink to be previousIndex
//   else {
//     imageLink = arrayOfImagesThatWillCycle[previousIndex];
//   }
// };

const changeImages = async () => {
  for (let i = 0; i < 20; i++) {
    nextImage();
    imageToChange.classList.toggle('easeIn');
    await sleep(4000);
    imageToChange.classList.toggle('easeIn');
    imageToChange.classList.toggle('easeOut');
    await sleep(1000);
    imageToChange.classList.toggle('easeOut');
  }
};

changeImages();
