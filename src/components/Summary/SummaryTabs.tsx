import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../utils/Context";
import UserReactionItem from "./UserReactionItem";
import { aggregrateEmojiCount } from "../../utils/aggreagrate-emoji-count";

const SummaryTabs = () => {
  const { userReactions, reactions, users, hoveredReactionId } =
    useContext(Context);

  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    setTabIndex(
      hoveredReactionId !== 0
        ? reactions.findIndex((reaction) => reaction.id === hoveredReactionId) +
            1
        : 0
    );
  }, [hoveredReactionId]);

  return (
    <Tabs
      h="100%"
      w="100%"
      variant="unstyled"
      isFitted={true}
      index={tabIndex}
      onChange={(index) => setTabIndex(index)}
    >
      <TabList minW="fit-content" color="#161616">
        <Tab
          marginX="1px"
          borderBottomStyle="solid"
          borderBottomWidth="1px"
          borderBottomColor="#E0E0E0"
          fontSize="14px"
          _selected={{ fontWeight: "600", borderBottomColor: "#0F62FE" }}
        >
          All
        </Tab>

        {reactions.map((reaction) => (
          <Tab
            key={reaction.id}
            marginX="1px"
            borderBottomStyle="solid"
            borderBottomWidth="1px"
            borderBottomColor="#E0E0E0"
            fontSize="14px"
            _selected={{ fontWeight: "600", borderBottomColor: "#0F62FE" }}
            _focus={{ fontWeight: "600", borderBottomColor: "#0F62FE" }}
          >
            {reaction.emoji} ·{" "}
            {aggregrateEmojiCount(userReactions, reaction.id)}
          </Tab>
        ))}
      </TabList>
      <TabPanels h="100%" color="#393939">
        <TabPanel h="100%" maxH="300px" overflowY="auto">
          {userReactions.map((userReaction) => (
            <UserReactionItem
              key={userReaction.id}
              emoji={
                reactions.find(
                  (reaction) => reaction.id === userReaction.reaction_id
                )?.emoji
              }
              user={users.find((user) => user.id === userReaction.user_id)}
            />
          ))}
        </TabPanel>
        {reactions.map((reaction) => (
          <TabPanel h="100%" maxH="300px" overflowY="auto" key={reaction.id}>
            {userReactions
              .filter(
                (userReaction) => userReaction.reaction_id === reaction.id
              )
              .map((userReaction) => (
                <UserReactionItem
                  key={userReaction.id}
                  emoji={
                    reactions.find(
                      (reaction) => reaction.id === userReaction.reaction_id
                    )?.emoji
                  }
                  user={users.find((user) => user.id === userReaction.user_id)}
                />
              ))}
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default SummaryTabs;
