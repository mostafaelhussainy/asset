import { Box } from "@mui/material";
import { FilterProvider } from "./context/FilterContext";
import Header from "./components/Layout/Header";
import Filters from "./components/Filters";
import ItemList from "./components/ItemList";

const App = () => {
  return (
    <FilterProvider>
      <Box
        sx={{
          background: "#F7F8F8",
          minHeight: "100vh",
        }}
      >
        <Header />
        <Box sx={{ display: "flex", flexDirection: "column", maxWidth: "95%", margin: "0 auto" }}>
          <Filters />
          <ItemList />
        </Box>
      </Box>
    </FilterProvider>
  );
};

export default App;
