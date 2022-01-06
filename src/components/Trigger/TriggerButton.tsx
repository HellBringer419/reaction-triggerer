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
import { Reaction } from "../../types/reaction";
import TriggerEmoji from "./TriggerEmoji";

const TriggerButton: React.FC<{
  reactions: Reaction[];
  handleEmojiSelect: (id: number) => void;
}> = ({ reactions, handleEmojiSelect }) => {
  const bgGray = useColorModeValue("#EDEEF0", "#0E0F11");
  const bgWhite = useColorModeValue("white", "gray.800");
  const borderLightGray = useColorModeValue("#E0E0E0", "#050505");
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
          <AddEmoji isDark={bgGray === "#0E0F11"} />
        </Center>
      </PopoverTrigger>
      <PopoverContent
        h="32px"
        w="fit-content"
        borderColor={borderLightGray}
        borderRadius="24px"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.03)"
        bg={bgWhite}
        _focus={{ borderColor: { popoverRadiusWhite: borderLightGray } }}
      >
        <PopoverBody margin="0" padding="6px">
          <Flex justifyContent="space-around" alignItems="stretch">
            {reactions.map((reaction) => (
              <TriggerEmoji
                key={reaction.id}
                emoji={reaction.emoji}
                name={reaction.name}
                id={reaction.id}
                handleEmojiSelect={handleEmojiSelect}
              />
            ))}
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default TriggerButton;
