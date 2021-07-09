require('./styles.scss');
import One from './images/1.jpg';
import Two from './images/2.jpeg';
import Three from './images/3.jpeg';
import Four from './images/4.jpeg';
import Five from './images/5.jpeg';

const imageToChange = document.querySelector('#image');
const arrayOfImagesThatWillCycle = [One, Two, Three, Four, Five];

let imageLink;

const changeImages = () => {
    arrayOfImagesThatWillCycle.forEach(image => {
    imageLink = image;
    imageToChange.setAttribute('src', imageLink);
}, 2000);
}

changeImages();
