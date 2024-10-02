import { ItemType } from "../types/ItemType";

const items: ItemType[] = [
  { id: 1, name: "Item 1", category: "Category 1", subcategory: "Subcategory A" },
  { id: 2, name: "Item 2", category: "Category 2", subcategory: "Subcategory B" },
  { id: 3, name: "Item 3", category: "Category 1", subcategory: "Subcategory C" },
  { id: 4, name: "Item 4", category: "Category 3", subcategory: "Subcategory D" },
  { id: 5, name: "Item 5", category: "Category 2", subcategory: "Subcategory B" },
];

export const fetchItems = (): Promise<ItemType[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(items);
    }, 1000);
  });
};
