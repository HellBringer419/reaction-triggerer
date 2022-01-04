import { Avatar, Flex, HStack, Spacer, Text } from "@chakra-ui/react";

const UserReactionItem: React.FC = () => {
  return (
    <HStack w="100%">
      <Avatar
        name="username"
        src="https://bit.ly/dan-abramov"
        w="20px"
        h="20px"
      />
      <Text fontWeight="400" fontSize="14px">
        👍️ Leslie Alexander
      </Text>
    </HStack>
  );
};

export default UserReactionItem;
