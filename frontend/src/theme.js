import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  config: {
    initialColorMode: "dark", // or "light"
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      50: "#f5faff",
      100: "#c3daff",
      200: "#a4c2ff",
      300: "#7ea2ff",
      400: "#5c82ff",
      500: "#3b61ff", // Primary brand color
      600: "#2a4ccc",
      700: "#1a3799",
      800: "#0c2366",
      900: "#050d33",
    },
  },
});

export default customTheme;
