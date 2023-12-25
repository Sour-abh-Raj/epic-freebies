import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const theme = createTheme({
  typography: {
    poster: {
      fontSize: 64,
      color: "#0f0", // Matrix green color
      background: "linear-gradient(45deg, #00FF00, #00FFFF)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    },
    subtitle: {
      color: "#9400D3", // Dark violet color
      background: "linear-gradient(45deg, #4B0082, #8A2BE2)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          poster: "h1",
          subtitle: "h3",
        },
      },
    },
  },
});

// const theme = createTheme({
//   typography: {
//     poster: {
//       fontSize: 64,
//       color: "red",
//       background: "linear-gradient(45deg, #FF0000, #FF00FF)",
//       WebkitBackgroundClip: "text",
//       WebkitTextFillColor: "transparent",
//       textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
//     },
//     subtitle: {
//       color: "darkslateblue", // Updated color to "darkslateblue"
//       background: "linear-gradient(45deg, #00008B, #00CED1)",
//       WebkitBackgroundClip: "text",
//       WebkitTextFillColor: "transparent",
//       textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
//     },
//   },
//   components: {
//     MuiTypography: {
//       defaultProps: {
//         variantMapping: {
//           poster: "h1",
//           subtitle: "h3",
//         },
//       },
//     },
//   },
// });

const Header = ({ poster_title, poster_subtitle }) => {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="poster">{poster_title}</Typography>
      <Typography variant="subtitle">{poster_subtitle}</Typography>
    </ThemeProvider>
  );
};

export default Header;
