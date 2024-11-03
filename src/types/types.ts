export type StoreItem = {
  id: string
  fileName: string
  modelData: ModelData
}

export type ModelData = {
  displayName: string
  customizationOptions: PartCustomizationOption[]
}

export type PartCustomizationOption = {
  partName: string
  components: ComponentOption[]
}
  
export type ComponentOption = {
  id: string
  name: string
  visible: boolean
  matOptions: MaterialOptions[]
}

export type MaterialOptions = {
  name: string
  selected: boolean
}