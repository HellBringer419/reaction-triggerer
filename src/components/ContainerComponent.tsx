import { VStack } from "@chakra-ui/react";
import { useContext } from "react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { Context } from "../utils/Context";
import SummaryComponent from "./Summary/SummaryComponent";
import TriggerComponent from "./Trigger/TriggerComponent";

const ContainerComponent = () => {
  const { hoveredReactionId } = useContext(Context);

  return (
    <VStack minW="90vw" minH="90vh" justifyContent="space-between">
      <ColorModeSwitcher alignSelf="flex-end" />
      <SummaryComponent isVisible={hoveredReactionId === 0} />
      <TriggerComponent />
    </VStack>
  );
};

export default ContainerComponent;
