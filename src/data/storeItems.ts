import type { StoreItem, ModelData, MaterialOptions } from "@/types/types";

export const storeItems: StoreItem[] = [
  {
    id: "1",
    fileName: "steampunkGlasses",
    modelData: {
      displayName: "Goggles",
      customizationOptions: [
        {
          partName: "Frame",
          components: [
            {
              id: "",
              name: "Main",
              visible: true,
              matOptions: []
            },
            {
              id: "",
              name: "Side",
              visible: true,
              matOptions: []
            },
            {
              id: "",
              name: "BigGear",
              visible: true,
              matOptions: []
            },
            {
              id: "",
              name: "SmallGears",
              visible: true,
              matOptions: []
            },
          ]
        }
      ]
    }
  }
]