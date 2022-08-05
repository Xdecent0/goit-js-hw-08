import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
if (localStorage.getItem('videoplayer-current-time') === null) {
  localStorage.setItem(`videoplayer-current-time`, 0);
}
const player = new Player(iframe);
const onPlay = function ({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
