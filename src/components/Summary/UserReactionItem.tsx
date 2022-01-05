import { Avatar, HStack, Text } from "@chakra-ui/react";
import { User } from "../../types/user";

const UserReactionItem: React.FC<{
  emoji: string | undefined;
  user: User | undefined;
}> = ({ emoji, user }) => {
  if (user === undefined || emoji === undefined) return <> </>;
  return (
    <HStack w="100%">
      <Avatar name={user?.first_name} src={user?.avatar} w="20px" h="20px" />
      <Text
        fontWeight="400"
        fontSize="14px"
        paddingY="7px"
        fontFamily={"sans-serif"}
      >
        {emoji} {user?.first_name + " " + user?.last_name}
      </Text>
    </HStack>
  );
};

export default UserReactionItem;
