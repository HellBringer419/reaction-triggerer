import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  HStack,
  Container,
  Center,
  Stack,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Stack minH="100vh" spacing={8} direction={["column", "row"]}>
        <Center w="66%">
          <Text> Summary </Text>
        </Center>
        <VStack w="34%">
          <ColorModeSwitcher alignSelf={"flex-end"} />
          <Center h="80%" w="100%">
            <Text> Trigger </Text>
          </Center>
        </VStack>
      </Stack>
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
