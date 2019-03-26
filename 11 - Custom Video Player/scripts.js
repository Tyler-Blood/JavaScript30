// get our elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// build out functions

function togglePlay() {
    video[video.paused ? 'play' : 'pause']();
    
}

function updateButton() {
    const icon = this.pause ? '►' ? '❚ ❚';
    console.log('Update the button');
}


// hook up the event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)

toggle.addEventListener('click', togglePlay);