<template>
  <div>
    <div>Part To Customize</div>
      <div>Component:</div>
        <div>Option 1</div>
      <div>Colors:</div>
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

</style>