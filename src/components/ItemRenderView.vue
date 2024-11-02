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
import { GLTFLoader, MTLLoader, OBJLoader } from 'three/examples/jsm/Addons.js';

const canvasRenderer: Ref<HTMLCanvasElement | undefined> = ref()

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, 500 / 500, 0.1, 1000 );
scene.add(camera)

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
cube.position.set(0, 0, 0)
// scene.add( cube );

camera.position.z = 5;

function loadObj() {
  const mtlLoader = new MTLLoader()
  mtlLoader.load("../assets/models/cubeStack.mtl", (materials) => {
    materials.preload();
    var objLoader = new OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.load("../assets/models/cubeStack.obj", (obj) => {  
      var box = new THREE.Box3().setFromObject( obj );
      var center = new THREE.Vector3();
      box.getCenter( center );
      obj.position.sub( center );
      scene.add(obj)
      console.log(obj)
    },
    (progress) => {
      console.log("Progress:", progress)
    },
    (error) => {
      console.error("An error:", error)
    }
  )
  })
}

function loadGltf() {
  const loader = new GLTFLoader();

  loader.load( '/public/assets/cub.gltf', function ( gltf ) {
    console.log(gltf)
    // gltf.scene.children[0].scale.set(1000, 1000, 1000)
    scene.add( gltf.scene );
  }, undefined, function ( error ) {

    console.error( error );

  });
}

const gridHelper = new THREE.GridHelper(12, 12);
scene.add(gridHelper);

// Creates an axes helper with an axis length of 4.
const axesHelper = new THREE.AxesHelper(4);
scene.add(axesHelper);

// ambient light
const ambientLight = new THREE.AmbientLight( 0x404040, 0.001 );
const hemisphericLight = new THREE.HemisphereLight({
  skyColor: 0xffffbb,
  groundColor: 0x080820,
  intensity: 0.25,
  position: {
    x: 0,
    y: 430,
    z: -2500
  }
});

scene.add(ambientLight)
scene.add(hemisphericLight)

onMounted(() => {
  const renderer = new THREE.WebGLRenderer({
    alpha: true, 
    canvas: canvasRenderer.value,
    antialias: true
  });
  renderer.setSize( 500, 500 );
  const controls = new OrbitControls( camera, renderer.domElement );
  
  loadGltf()
  renderer.render( scene, camera)
  
  function animate() {
    requestAnimationFrame( animate );
    camera.updateMatrixWorld()
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