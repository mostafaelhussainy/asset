import { useContext } from "react";
import { TextField, Button, MenuItem, Select, Box, FormControl, InputLabel, OutlinedInput } from "@mui/material";
import { FilterContext } from "../../context/FilterContext";

const Filters = () => {
  const context = useContext(FilterContext);

  if (!context) return null;

  const {
    nameFilter,
    categoryFilter,
    subcategoryFilter,
    setNameFilter,
    setCategoryFilter,
    setSubcategoryFilter,
    clearFilters,
  } = context;

  const categories = ["Category 1", "Category 2", "Category 3"];
  const subcategories = ["Subcategory A", "Subcategory B", "Subcategory C", "Subcategory D"];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "40px",
      }}
    >
      <TextField
        sx={{
          width: "450px",
        }}
        placeholder="Search by name"
        value={nameFilter}
        onChange={(e) => setNameFilter(e.target.value)}
      />

      <FormControl sx={{ width: "450px" }}>
        <InputLabel>Filter by category</InputLabel>
        <Select
          value={categoryFilter || ""}
          onChange={(e) => setCategoryFilter(e.target.value as string)}
          input={<OutlinedInput label="Filter by category" />}
          renderValue={(selected) => {
            if (!selected) {
              return <em>None</em>;
            }
            return selected;
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {categories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ width: "450px" }}>
        <InputLabel>Filter by subcategory</InputLabel>
        <Select
          value={subcategoryFilter || ""}
          onChange={(e) => setSubcategoryFilter(e.target.value as string)}
          input={<OutlinedInput label="Filter by subcategory" />}
          renderValue={(selected) => {
            if (!selected) {
              return <em>None</em>;
            }
            return selected;
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {subcategories.map((subcategory) => (
            <MenuItem key={subcategory} value={subcategory}>
              {subcategory}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button onClick={clearFilters} variant="contained">
        Clear Filters
      </Button>
    </Box>
  );
};

export default Filters;
