
const controller = document.querySelector('input[type=number]');
const radialProgress = document.querySelector('.RadialProgress');
console.log(controller)
const setProgress = (progress) => {
  if(progress > 100){
    progress = 100
    controller.value = 100
  } 
  const value = `${progress}%`
  radialProgress.style.setProperty('--progress', value)
  radialProgress.setAttribute('aria-valuenow', value)
}

setProgress(controller.value)
controller.oninput = () => {
  setProgress(controller.value)
}

function onCheckboxChange(checkbox){
  const loader = document.querySelector('.RadialProgress')
  loader.classList.toggle(checkbox.dataset.class)
}

console.log(controller)