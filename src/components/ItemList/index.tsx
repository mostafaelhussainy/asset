import { useContext } from "react";
import { FilterContext } from "../../context/FilterContext";
import { Box, Typography } from "@mui/material";

const ItemList = () => {
  const { filteredItems } = useContext(FilterContext) || {};

  if (!filteredItems) return "error with context";
  return (
    <Box>
      {filteredItems.length > 0 ? (
        filteredItems.map((item) => (
          <Box key={item.id} sx={{ border: "1px solid #ccc", padding: "8px", margin: "4px" }}>
            <Typography variant="h6">{item.name}</Typography>
            <Typography variant="body2">Category: {item.category}</Typography>
            <Typography variant="body2">Subcategory: {item.subcategory}</Typography>
          </Box>
        ))
      ) : (
        <Typography variant="body2">No items found.</Typography>
      )}
    </Box>
  );
};

export default ItemList;
