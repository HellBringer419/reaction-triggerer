import { HStack } from "@chakra-ui/react";
import ReactionButton from "./ReactionButton";
import TriggerButton from "./TriggerButton";

const TriggerComponent = () => {
  return (
    <HStack>
      <ReactionButton emoji={"❤"} count={12} isActive={false} />
      <ReactionButton emoji={"👍"} count={1} isActive={false} />

      <TriggerButton />
    </HStack>
  );
};

export default TriggerComponent;

// TODO: customize pop-over content
