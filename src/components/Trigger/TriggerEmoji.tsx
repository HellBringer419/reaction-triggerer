import { Text, Tooltip, useColorModeValue } from "@chakra-ui/react";

const TriggerEmoji: React.FC<{
  id: number;
  emoji: String;
  name: String;
  handleEmojiSelect: (id: number) => void;
}> = ({ id, emoji, name, handleEmojiSelect }) => {
  const blackColor = useColorModeValue("#161616", "#E8E8E8");
  const bgWhite = useColorModeValue("white", "gray.800");
  return (
    <Tooltip
      h="24px"
      w="fit-content"
      borderRadius="100px"
      bg={blackColor}
      color={bgWhite}
      paddingY="2px"
      paddingX="8px"
      fontSize="12px"
      borderWidth="0"
      label={name}
      placement="top"
    >
      <Text
        fontWeight="700"
        fontSize="14px"
        lineHeight="18px"
        _hover={{ fontSize: "32px" }}
        onClick={() => handleEmojiSelect(id)}
      >
        {emoji}
      </Text>
    </Tooltip>
  );
};

export default TriggerEmoji;
