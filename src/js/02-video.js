var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on(
  'timeupdate',
  throttle(function saveCurrentTime(data) {
    console.log('Upsss');
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
  }, 500),
);

const parsedCurrentTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));

player.setCurrentTime(parsedCurrentTime.seconds).catch(function (error) {
  switch (error.name) {
    case 'RangeError':
      // the time was less than 0 or greater than the video’s duration
      break;

    default:
      // some other error occurred
      break;
  }
});
// localStorage.clear();
