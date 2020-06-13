import {
  VRButton
} from './modules/VRButton.js';

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Vr button
renderer.xr.enabled = true;
document.body.appendChild(VRButton.createButton(renderer));

var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial({
  color: 0x00ff00
});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

renderer.setAnimationLoop(function() {

  movement(pressedKeys, camera);
  renderer.render(scene, camera);


});

let mousedown = false;
let startX,
    startY;

document.addEventListener('mousedown', evt => {
  mousedown = true;
  startX = evt.clientX;
  startY = evt.clientY;
});

document.addEventListener('mousemove', evt => {
  if(mousedown) {
      if(startX > evt.clientX) {
          camera.rotateY(.005);
      } else {
          camera.rotateY(-.005);
      }

      if(startY > evt.clientY) {
          camera.rotateX(.005);
      } else {
          camera.rotateX(-.005);
      }
  }

  startX = evt.clientX;
  startY = evt.clientY;

});

document.addEventListener('mouseup', evt => {
  mousedown = false;
});
