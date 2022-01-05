import { Button, useColorModeValue } from "@chakra-ui/react";

const ReactionButton: React.FC<{
  emoji: String;
  count: number;
  isActive: boolean;
}> = ({ emoji, count, isActive }) => {
  const bgActive = useColorModeValue("#EDF5FF", "blue.500");
  const bgInactive = useColorModeValue("#F4F4F4", "gray.700");

  return (
    <Button
      w="47px"
      h="32px"
      paddingX="8px"
      paddingY="2px"
      borderRadius="100px"
      borderWidth="1px"
      borderColor={isActive ? "#0F62FE" : "white"}
      boxSizing="border-box"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg={isActive ? bgActive : bgInactive}
      fontSize="12px"
      fontWeight="400"
      color="#525252"
    >
      {emoji} · {count}
    </Button>
  );
};

export default ReactionButton;
