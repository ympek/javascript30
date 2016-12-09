/**
 * Created by ympek on 09.12.2016.
 */


const keys = document.querySelectorAll('.key');

let playSound = function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const btn = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(audio)

    if (!audio)
        return;

    audio.currentTime = 0;

    btn.classList.add('playing');

    audio.play();
};

let removeTransition = function(e) {
    console.log(e);

    if (e.propertyName == 'transform') {
        this.classList.remove('playing');
    }
};

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
