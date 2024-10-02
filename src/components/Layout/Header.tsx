import { Box } from "@mui/material";

const Header = () => {
  return (
    <Box
      component="nav"
      sx={{
        height: "50px",
        background: "#FFF",
        marginBottom: "30px",
        boxShadow: "0px 12px 20px 0px rgba(0, 0, 0, 0.04), 0px 0px 2px 0px rgba(0, 0, 0, 0.06)",
      }}
    ></Box>
  );
};

export default Header;
