// import { dir } from 'console';
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function animate() {
	renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );


let lastX = null;
let lastY = null;
const directionDisplay = document.getElementById("direction");

let direction = "";


document.addEventListener("mousemove", (event) => {
    if (lastX !== null && lastY !== null) {
        const deltaX = event.clientX - lastX;
        const deltaY = event.clientY - lastY;

        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            direction = deltaX > 0 ? "Right" : "Left";
        } else {
            direction = deltaY > 0 ? "Down" : "Up";
        }

        directionDisplay.textContent = `Mouse is moving: ${direction}`;
    }

    // while (direction === "Right") {
    //     cube.rotation.x += 0.1;
    // }
    // while (direction === "Left") {
    //     cube.rotation.x -= 0.1;
    // }
    // while (direction === "Up") {
    //     cube.rotation.y += 0.1;
    // }
    // while (direction === "Down") {
    //     cube.rotation.y -= 0.1;
    // }

    // Update last positions
    lastX = event.clientX;
    lastY = event.clientY;
});




switch (direction) {
    case "Right":
    case "Left":
        cube.rotation.x -= 0.1;
    case "Down":
        cube.rotation.y -= 0.1;
    case "Up":
        cube.rotation.y += 0.1;
}

// addEventListener("mousemove", (event) => {
//     cube.rotation.x += Math.random();
//     cube.rotation.y += Math.random();
// })
