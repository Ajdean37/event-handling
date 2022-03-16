// Event Handling
function onMouseDown( event ) {
  console.log("mouse down!");
  console.log(event);
  let target = event.target; //this is the node that was clicked
  target.style.backgroundColor = 'yellow';
}

function activateNodes( event ) {
  //give all boxes the active class
  let boxes = document.querySelectorAll('.box');
  console.log(boxes);
  for (const box of boxes) {
    box.classList.add('active');
  }
}

function deactivateNodes( event ) {
    //remove active class
  let boxes = document.querySelectorAll('.box');
  console.log(boxes);
  for (const box of boxes) {
    box.classList.remove('active');
  }
}


// Ready dom is for adding event listeners 
function readyDOM() {
  let box1 = document.querySelector('#box1')
  box1.addEventListener('mousedown', onMouseDown);
  
  let activateBtn = document.querySelector('#activate-btn')
  activateBtn.addEventListener('click', activateNodes);

  let deactivateBtn = document.querySelector('#deactivate-btn')
  deactivateBtn.addEventListener('click', deactivateNodes);
}



console.log("JS loaded");

readyDOM();