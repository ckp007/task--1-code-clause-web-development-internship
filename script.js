var video = document.getElementById('my-video');
video.addEventListener('ended', function() {
  this.currentTime = 0;
  this.play();
}, false);
