import {
  Center,
  Flex,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  useColorModeValue,
} from "@chakra-ui/react";
import AddEmoji from "../../icons/AddEmoji";
import TriggerEmoji from "./TriggerEmoji";

const TriggerButton = () => {
  const bgGray = useColorModeValue("#EDEEF0", "gray.800");
  const bgWhite = useColorModeValue("white", "gray.700");
  const popoverRadiusWhite = useColorModeValue("#E0E0E0", "gray.600");
  return (
    <Popover placement="top">
      <PopoverTrigger>
        <Center
          as="button"
          w="32px"
          h="32px"
          paddingX="8px"
          paddingY="2px"
          borderRadius="100%"
          borderWidth="1px"
          borderColor={bgWhite}
          boxSizing="border-box"
          display="flex"
          justifyContent="center"
          alignItems="center"
          bg={bgGray}
          fontSize="12px"
          fontWeight="400"
        >
          <AddEmoji isDark={bgGray === "gray.800"} />
        </Center>
      </PopoverTrigger>
      <PopoverContent
        h="32px"
        w="118px"
        borderColor={popoverRadiusWhite}
        borderRadius="24px"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.03)"
        bg={bgWhite}
        _focus={{ borderColor: { popoverRadiusWhite } }}
      >
        <PopoverBody margin="0" padding="6px">
          <Flex justifyContent="space-around" alignItems="stretch">
            <TriggerEmoji emoji="👍️" name="Like" />
            <TriggerEmoji emoji="❤️" name="Love" />
            <TriggerEmoji emoji="👏" name="Cheer" />
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default TriggerButton;
