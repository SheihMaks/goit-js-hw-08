var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on(
  'timeupdate',
  throttle(function saveCurrentTime(data) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
  }, 1000),
);

const parsedCurrentTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));

player.setCurrentTime(parsedCurrentTime.seconds);
// localStorage.clear();
