const playSound = e => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if (!audio) return; // stop from running function 
    audio.currentTime = 0; // rewind to the start of the audio
    audio.play()
    key.classList.add('playing')
}

window.addEventListener('keydown', playSound)

const removeTransition = (e) => {
  if(e.propertyName !== 'transform') return // skip if it is not a transition
  e.target.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')

keys.forEach(key => key.addEventListener('transitionend', removeTransition))