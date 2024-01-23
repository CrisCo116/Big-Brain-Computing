const cubeEl = document.getElementById('cube');
const rotationEl = document.getElementById('rotation');

let getMousePos;
let currentRotation;
let latestRotation;
let reanimateTimer;

window.addEventListener('mousedown', event => {
  event.preventDefault(); // mouseup won't fire without this after dragging
  rotationEl.className = 'manual';
  getMousePos = { clientX : event.clientX, clientY : event.clientY };

  if (reanimateTimer) {
    clearTimeout(reanimateTimer);
  }
});

window.addEventListener('mouseup', () => {
  getMousePos = null;
  // set latestRotation to pick up latest angles on next mouse down + move
  latestRotation = currentRotation;
  
  reanimateTimer = setTimeout(() => {
    rotationEl.className = '';
  }, 5000);
});

document.onmousemove = handleMouseMove;
function handleMouseMove(event) {
  if (getMousePos) {
    // We now have their initial mouse position over the cube, rotate based upon the maths of deg on the px amt. 150px being 90deg (size of one pane / image)

    let cubeMousePos = {
      x : event.pageX - getMousePos.clientX,
      y : event.pageY - getMousePos.clientY,
    };
    
    let degChange = {
      x : latestRotation ? latestRotation.x + cubeMousePos.x : cubeMousePos.x,
      y : latestRotation ? latestRotation.y + cubeMousePos.y : cubeMousePos.y,
    };
    
    currentRotation = degChange;

    rotationEl.style.transform = `rotateY(${degChange.x}deg) rotateX(${degChange.y}deg)`;
  }
}