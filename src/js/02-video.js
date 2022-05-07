import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onSaveCurrentTime = data => {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
};

player.on('timeupdate', throttle(onSaveCurrentTime, 1000));

const parsedCurrentTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));

player.setCurrentTime(parsedCurrentTime.seconds);
// localStorage.clear();
