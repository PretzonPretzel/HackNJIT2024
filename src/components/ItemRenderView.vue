<template>
  <div>
    <canvas ref="canvasRenderer" class="canvas-renderer"></canvas>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, render, watch, type Ref } from 'vue';
import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import Background from 'three/src/renderers/common/Background.js';
import { GLTFLoader, MTLLoader, OBJLoader } from 'three/examples/jsm/Addons.js';
import type { PartCustomizationOption, StoreItem } from '@/types/types';

const props = defineProps<{
  /** Name of gltf file that lives in public */
  fileName: string
  currentItem: StoreItem
}>()

const RENDERER_WIDTH = 600
const RENDERER_HEIGHT = 350

const canvasRenderer: Ref<HTMLCanvasElement | undefined> = ref()
const currentModel: Ref<THREE.Group | undefined> = ref()

const scene = new THREE.Scene();
// scene.background = new THREE.Color( 0xa0a0a0 );

const camera = new THREE.PerspectiveCamera( 45, RENDERER_WIDTH / RENDERER_HEIGHT, 0.1, 1000 );
camera.position.set( 7, 3, 7 );

function setUpScene() {
  const renderer = new THREE.WebGLRenderer( {
    alpha: true,
    canvas: canvasRenderer.value,
    antialias: true
  })
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( RENDERER_WIDTH, RENDERER_HEIGHT );
  renderer.toneMapping = THREE.LinearToneMapping;
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const geometry = new THREE.BoxGeometry( 20, 20, 20 );
  const material = new THREE.MeshBasicMaterial( { color: 0x808080 } );
  const cube = new THREE.Mesh( geometry, material );
  cube.position.set(0, 0, 0)
  // scene.add( cube );

  const pmremGenerator = new THREE.PMREMGenerator( renderer );
  pmremGenerator.compileEquirectangularShader();

  const hlight = new THREE.AmbientLight( 0xffffff, 0.3 );
  scene.add( hlight );

  const lightPositions: [number, number, number][] = [
    [-10, 5, 0],
    [10, 5, 0],
    [0, 5, 10],
    [0, 5, -10],

    [-10, 5, 5],
    [10, 5, -5],
    [-5, 5, 10],
    [5, 5, -10],
  ]

  for (const pos of lightPositions) {
    const directionalLight = new THREE.DirectionalLight( 0xffffff, 2.5 );
    directionalLight.castShadow = true;
    directionalLight.shadow.camera.top = 4;
    directionalLight.shadow.camera.bottom = - 4;
    directionalLight.shadow.camera.left = - 4;
    directionalLight.shadow.camera.right = 4;
    directionalLight.shadow.camera.near = 0.1;
    directionalLight.shadow.camera.far = 40;
    directionalLight.shadow.camera.far = 40;
    directionalLight.shadow.bias = - 0.002;
    directionalLight.position.set(...pos);
    scene.add( directionalLight );
  }

  return renderer
}

function loadGltf() {
  const loader = new GLTFLoader();

  loader.load( `/public/assets/${props.fileName}/${props.fileName}.gltf`, function ( gltf ) {
    console.log(gltf)
    // gltf.scene.children[0].scale.set(1000, 1000, 1000)
    // COORDS: y = green, blue = z, orange = x
    gltf.scene.position.set(0, 0, 0)
    scene.add( gltf.scene );
    currentModel.value = gltf.scene
  }, undefined, function ( error ) {

    console.error( error );

  });
}

// const gridHelper = new THREE.GridHelper(12, 12);
// scene.add(gridHelper);

// // Creates an axes helper with an axis length of 4.
// const axesHelper = new THREE.AxesHelper(4);
// scene.add(axesHelper);

onMounted(() => {
  const renderer = setUpScene()
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

watch(currentModel, (newVal) => {
  console.log("current model:", newVal)
})

watch(() => props.currentItem, (newVal) => {
  updateGroups(newVal.modelData.customizationOptions)
  currentModel.value?.updateMatrix()
}, {deep: true})

/** Call this everytime the user changes a customization option */
function updateGroups(options: PartCustomizationOption[]) {
  for (const option of options) {
    const currentModelMeshOptions = currentModel.value?.children.filter(item => item.name.startsWith(`${option.partName}`))
    for (const component of option.components) {
      const targetMeshName = `${option.partName}(${component.name})`
      const mesh = currentModelMeshOptions?.find(item => item.name === targetMeshName)
      if (mesh === undefined) throw new Error("Could not find mesh with that name")
      mesh.visible = component.visible
    }
  }
}

</script>

<style scoped>
.canvas-renderer {
  border: 2px solid black;
  border-radius: 20px;
}
</style> 