export interface ColorOption {
    name: string
    hex: string
  }
  
export interface ComponentOption {
    name: string
    id: string
    colorOptions: ColorOption[]
  }
  
export interface PartCustomizationOption {
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