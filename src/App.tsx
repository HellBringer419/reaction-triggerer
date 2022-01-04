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

{
  /* <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        </Grid> */
}

{
  /* <VStack spacing={8}>
  <Logo h="40vmin" pointerEvents="none" />
  <Text>
    Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
  </Text>
  <Link
    color="teal.500"
    href="https://chakra-ui.com"
    fontSize="2xl"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn Chakra
  </Link>
  </VStack> */
}
