import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "system",
    useSystemColorMode: true,
  },
  fonts: {
    body: "IBM Plex Sans",
  },
});

export default theme;
