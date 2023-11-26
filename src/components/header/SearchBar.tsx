import React, { useState } from "react";
import { Paper, Button } from "@mui/material";

//Icons
import SearchIcon from "@mui/icons-material/Search";
import colorConfigs from "~/configs/colorConfigs";

type Props = {};

const SearchBar = (props: Props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const onhandleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <Paper
      component="form"
      onSubmit={onhandleSubmit}
      sx={{
        display: "flex",
        alignItems: "center",
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        width: "100%",
      }}
    >
      <SearchIcon
        sx={{ color: "rgb(128,135,153)", fontSize: "22px", marginRight: "8px" }}
      />

      <input
        style={{
          border: "none",
          outline: "none",
          minWidth: "200px",
          width: "100%",
          fontSize: "16px",
          opacity: 0.8,
        }}
        placeholder="Searching for..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button
        type="submit"
        sx={{
          "&:hover": {
            backgroundColor: colorConfigs.general.secondary, // İstediğiniz özel hover rengini burada belirtin
          },
          p: "10px",
          backgroundColor: colorConfigs.general.primary,
          color: "#fff",
          border: "1px solid rgb(194,75,90)",
          borderRadius: "0 20px 20px 0",
          width: "150px",
          textTransform: "capitalize",
        }}
        aria-label="search"
      >
        Search
      </Button>
    </Paper>
  );
};

export default SearchBar;
