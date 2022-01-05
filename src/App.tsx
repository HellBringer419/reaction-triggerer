import { ChakraProvider, Box } from "@chakra-ui/react";
import theme from "./theme";
import "@fontsource/ibm-plex-sans";
import ContainerComponent from "./components/ContainerComponent";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <ContainerComponent />
    </Box>
  </ChakraProvider>
);
