<template>
  <div>
    <canvas ref="canvasRenderer" class="canvas-renderer"></canvas>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import Background from 'three/src/renderers/common/Background.js';

const canvasRenderer: Ref<HTMLCanvasElement | undefined> = ref()

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, 500 / 500, 0.1, 1000 );
scene.add(camera)

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

onMounted(() => {
  const renderer = new THREE.WebGLRenderer({
    canvas: canvasRenderer.value,
    antialias: true
  });
  renderer.setSize( 500, 500 );
  const controls = new OrbitControls( camera, renderer.domElement );
  
  renderer.render( scene, camera );

  
  function animate() {
    renderer.render( scene, camera );

    controls.update();
  }
  renderer.setAnimationLoop( animate );
})
</script>

<style scoped>
.canvas-renderer {
  width: 500px;
  height: 500px;
  border: 2px solid black;
}
</style> 