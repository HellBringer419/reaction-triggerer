import { ChakraProvider, Box } from "@chakra-ui/react";
import "@fontsource/ibm-plex-sans";
import { ContextProvider } from "./utils/Context";
import theme from "./theme";
import ContainerComponent from "./components/ContainerComponent";

export const App = () => (
  <ChakraProvider theme={theme}>
    <ContextProvider>
      <Box textAlign="center" fontSize="xl">
        <ContainerComponent />
      </Box>
    </ContextProvider>
  </ChakraProvider>
);
