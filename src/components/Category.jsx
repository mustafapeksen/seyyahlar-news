import React from "react";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Category(props) {
  const theme = createTheme({
    palette: {
      whiteTone: {
        main: "#E1E2EF",
        light: "#E8E9F6",
        dark: "#B9BAD6",
        contrastText: "#242105",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Button color="whiteTone" onClick={props.tag}>
        {props.name}
      </Button>
    </ThemeProvider>
  );
}

export default Category;
