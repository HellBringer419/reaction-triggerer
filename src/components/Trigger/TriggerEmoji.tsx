import {
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const TriggerEmoji: React.FC<{ emoji: String; name: String }> = ({
  emoji,
  name,
}) => {
  const bgBlack = useColorModeValue("#161616", "gray.500");
  const bgWhite = useColorModeValue("white", "gray.700");
  return (
    <Popover placement="top" trigger="hover">
      <PopoverTrigger>
        <Text
          color="black"
          fontWeight="700"
          fontSize="14px"
          lineHeight="18px"
          _hover={{ fontSize: "32px" }}
        >
          {emoji}
        </Text>
      </PopoverTrigger>
      <PopoverContent
        h="24px"
        w="fit-content"
        borderRadius="100px"
        bg={bgBlack}
        color={bgWhite}
        paddingY="2px"
        paddingX="8px"
        fontSize="12px"
        borderWidth="0"
      >
        <Text>{name}</Text>
      </PopoverContent>
    </Popover>
  );
};

export default TriggerEmoji;
