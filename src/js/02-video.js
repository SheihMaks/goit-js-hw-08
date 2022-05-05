const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', function (data) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
});
const savedTime = localStorage.getItem('videoplayer-current-time');
const parsedCurrentTime = JSON.parse(savedTime);

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

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
// localStorage.clear();
