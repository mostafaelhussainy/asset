import { createContext, ReactNode, useEffect, useState } from "react";
import { ItemType } from "../types/ItemType";
import { fetchItems } from "../services/mockApi";

type FilterContextType = {
  items: ItemType[];
  filteredItems: ItemType[];
  nameFilter: string;
  categoryFilter: string | null;
  subcategoryFilter: string | null;
  setNameFilter: (name: string) => void;
  setCategoryFilter: (category: string) => void;
  setSubcategoryFilter: (subcategory: string) => void;
  clearFilters: () => void;
};

const defaultContext: FilterContextType = {
  items: [],
  filteredItems: [],
  nameFilter: "",
  categoryFilter: null,
  subcategoryFilter: null,
  setNameFilter: () => {},
  setCategoryFilter: () => {},
  setSubcategoryFilter: () => {},
  clearFilters: () => {},
};

export const FilterContext = createContext<FilterContextType>(defaultContext);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<ItemType[]>([]);
  const [nameFilter, setNameFilter] = useState<string>("");
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [subcategoryFilter, setSubcategoryFilter] = useState<string | null>(null);

  useEffect(() => {
    const loadItems = async () => {
      const fetchedItems = await fetchItems();
      setItems(fetchedItems);
    };
    loadItems();
  }, []);

  const filteredItems = items.filter((item) => {
    const matchesName = item.name.toLowerCase().includes(nameFilter.toLowerCase());
    const matchesCategory = categoryFilter ? item.category === categoryFilter : true;
    const matchesSubcategory = subcategoryFilter ? item.subcategory === subcategoryFilter : true;
    return matchesName && matchesCategory && matchesSubcategory;
  });

  const clearFilters = () => {
    setNameFilter("");
    setCategoryFilter(null);
    setSubcategoryFilter(null);
  };

  return (
    <FilterContext.Provider
      value={{
        items,
        filteredItems,
        nameFilter,
        categoryFilter,
        subcategoryFilter,
        setNameFilter,
        setCategoryFilter,
        setSubcategoryFilter,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
