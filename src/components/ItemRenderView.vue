<template>
  <div>
    <canvas ref="canvasRenderer" class="canvas-renderer"></canvas>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, render, type Ref } from 'vue';
import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import Background from 'three/src/renderers/common/Background.js';
import { MTLLoader, OBJLoader } from 'three/examples/jsm/Addons.js';

const canvasRenderer: Ref<HTMLCanvasElement | undefined> = ref()

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, 500 / 500, 0.1, 1000 );
scene.add(camera)

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

// var mtlLoader = new MTLLoader();
// var plant_cube = undefined;
// mtlLoader.load("../assets/models/cubeSatck.mtl", function(materials)
// {
//     materials.preload();
//     var objLoader = new OBJLoader();
//     objLoader.setMaterials(materials);
//     objLoader.load("../assets/models/cubeStack.obj", function(object)
//     {    
//         plant_cube = object;
//         scene.add( plant_cube );
//     });
// });




onMounted(() => {
  const renderer = new THREE.WebGLRenderer({
    // alpha: true,
    canvas: canvasRenderer.value,
    antialias: true
  });
  renderer.setSize( 500, 500 );
  const controls = new OrbitControls( camera, renderer.domElement );
  
  // renderer.render( scene, camera );
  const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
  scene.add(light)
  const loader = new OBJLoader();
  loader.load(
    '../assets/models/cubeStack.obj',
    (object) => {
      object.position.set(0,0,0)
      scene.add(object)
      console.log(object)
      renderer.render( scene, camera )
    },
    (progress) => {

    },
    (error) => {
      console.error("An error occured, oh nyo!", error)
    }
  )
  
  function animate() {
    requestAnimationFrame( animate );

    renderer.render( scene, camera );

    controls.update();
  }
  animate()
  // renderer.setAnimationLoop( animate );
})


</script>

<style scoped>
.canvas-renderer {
  width: 500px;
  height: 500px;
  border: 12px solid black;
}
</style> 