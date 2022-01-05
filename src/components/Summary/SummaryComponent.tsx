import { Text, useColorModeValue, VStack } from "@chakra-ui/react";
import SummaryTabs from "./SummaryTabs";

const SummaryComponent = () => {
  const bgWhite = useColorModeValue("white", "gray.800");
  return (
    <VStack h="386px" w="497px" alignItems="flex-start" bg={bgWhite}>
      <Text
        padding="16px"
        paddingBottom="3px"
        fontWeight="600"
        fontSize="14px"
        color="#161616"
      >
        Reactions
      </Text>
      <SummaryTabs />
    </VStack>
  );
};

// Fonts used Ibm pixel Sans (semiBold 600, Bold 700, Regular 400, )

export default SummaryComponent;
