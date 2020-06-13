let speed = .1;

let pressedKeys = {
  87: false,  // Straight (W)
  65: false,  // Down (S)
  83: false,  // Left (A)
  68: false   // Right (D)
};

// let straight  = document.getElementById('straight'),
//     back      = document.getElementById('back'),
//     left      = document.getElementById('left'),
//     right     = document.getElementById('right'),
//     up        = document.getElementById('up'),
//     down      = document.getElementById('down');
//
// straight.addEventListener('click', (e)=>{
//   camera.position.z--;
// });
//
// back.addEventListener('click', (e)=>{
//   camera.position.z++;
// });
//
// left.addEventListener('click', (e)=>{
//   camera.position.x--;
// });
//
// right.addEventListener('click', (e)=>{
//   camera.position.x++;
// });
//
// up.addEventListener('click', (e)=>{
//   camera.position.y++;
// });
//
// down.addEventListener('click', (e)=>{
//   camera.position.y--;
// });

document.addEventListener('keydown', evt => {
  if(evt.keyCode in pressedKeys) {
    pressedKeys[evt.keyCode] = true;
  }
});

document.addEventListener('keyup', evt => {
  if(evt.keyCode in pressedKeys) {
    pressedKeys[evt.keyCode] = false;
  }
});

function movement(key, obj) {
  if(key[87]) obj.position.z-= speed; // Straight (W)
  if(key[65]) obj.position.x-= speed; // Back (S)
  if(key[83]) obj.position.z+= speed; // Left (A)
  if(key[68]) obj.position.x+= speed; // Right (D)
}
