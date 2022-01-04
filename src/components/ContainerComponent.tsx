import { Center, Stack, useColorModeValue, VStack } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import SummaryComponent from "./Summary/SummaryComponent";
import TriggerComponent from "./Trigger/TriggerComponent";

const ContainerComponent = () => {
  const bgGray = useColorModeValue("gray.50", "gray.700");

  return (
    <Stack minH="100vh" spacing={8} direction={["column", "row"]}>
      <Center w="66%" bg={bgGray}>
        <SummaryComponent />
      </Center>
      <VStack w="34%">
        <ColorModeSwitcher alignSelf={"flex-end"} />
        <Center h="80%" w="100%">
          <TriggerComponent />
        </Center>
      </VStack>
    </Stack>
  );
};

export default ContainerComponent;
