<template>
  <div id="page-container">

    <div id="img-container">
      <img src="../assets/logo.svg" id="prod-img"></img>
    </div>
    
    <div id="options-container">
      <h1 class="prod-title">The Vue Logo</h1>
      
      <div class="color-selector">
        <p>Logo Colors</p>
        <div class="color-options">
          <button>Default</button>
          <button>Red</button>
          <button>Green</button>
        </div>
      </div>

      <div class="comp-options">Component:</div>
        <div>Option 1</div>
      <div>Colors:</div>
    </div>
  </div>
</template>

<script setup lang="ts">



interface ColorOption {
  name: string
  hex: string
}

interface ComponentOption {
  name: string
  id: string
  colorOptions: ColorOption[]
}

interface PartCustomizationOption {
  partName: string
  components: ComponentOption[]
}

const itemOptions: PartCustomizationOption[] = [
  {
    partName: "Glass",
    components: [
      {
        name: "Component 1",
        id: "",
        colorOptions: [
          {
            name: "red",
            hex: "#FFFF"
          }
        ]
      }
    ]
  }
]

</script>

<style scoped>

div {
  border: 2px solid blue;
}

#page-container {
  background-color: #281511;
  height: 100vh;
  color: white;

}

.color-options button {
  background-color: #963501;
  width: 150px;
  height: 75px;
  margin: 10px;
  border: 3px solid black;
}
.color-selector {
  display: flex;
  flex-direction: column;
  align-items: left;
}
.color-options {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
}

.prod-title {
  font-size: 50px;
  font-weight: 900;
}

#page-container {
  display: flex;
}

#options-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#img-container {
  height: 500px;
  width: 500px;
  /* border-image: url('https://cdn.pixabay.com/photo/2021/08/08/19/35/gears-6531778_960_720.png') 30 round; */
  border: 16px solid black;
}

#prod-img {
  padding: 30px;
}
</style>