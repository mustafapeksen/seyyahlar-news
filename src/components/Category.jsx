import React from "react";
import Button from "@mui/material/Button"; // Importing the Button component from Material-UI
import { createTheme, ThemeProvider } from "@mui/material/styles"; // Importing the necessary components from Material-UI for theming

function Category(props) {
  // Creating a custom theme using Material-UI's createTheme function
  const theme = createTheme({
    palette: {
      whiteTone: {
        main: "#E1E2EF", // Main color for the custom whiteTone palette
        light: "#E8E9F6", // Light color for the custom whiteTone palette
        dark: "#B9BAD6", // Dark color for the custom whiteTone palette
        contrastText: "#242105", // Contrast text color for the custom whiteTone palette
      },
    },
  });

  return (
    // Providing the custom theme to the Button component using ThemeProvider
    <ThemeProvider theme={theme}>
      {/* Rendering a Button component with custom color from the whiteTone palette */}
      <Button color="whiteTone" onClick={props.tag}>
        {props.name} {/* Displaying the category name */}
      </Button>
    </ThemeProvider>
  );
}

export default Category;
