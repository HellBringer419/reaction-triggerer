import { Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { FC } from "react";
import SummaryTabs from "./SummaryTabs";

const SummaryComponent: FC<{ isVisible: boolean }> = ({ isVisible }) => {
  const bgWhite = useColorModeValue("white", "gray.800");
  const blackColor = useColorModeValue("#161616", "#E8E8E8");

  return (
    <VStack
      h="386px"
      minW="497px"
      alignItems="flex-start"
      bg={bgWhite}
      visibility={isVisible ? "hidden" : "visible"}
    >
      <Text
        padding="16px"
        paddingBottom="3px"
        fontWeight="600"
        fontSize="14px"
        color={blackColor}
      >
        Reactions
      </Text>
      <SummaryTabs />
    </VStack>
  );
};

export default SummaryComponent;
