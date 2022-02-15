import { HStack } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { UserReaction } from "../../types/user-reaction";
import { aggregrateEmojiCount } from "../../utils/aggreagrate-emoji-count";
import { Context } from "../../utils/Context";
import ReactionButton from "./ReactionButton";
import TriggerButton from "./TriggerButton";

const TriggerComponent = () => {
  const {
    userReactions,
    reactions,
    addUserReaction,
    deleteUserReaction,
    currentContentId,
    currentUserId,
    setHoveredReactionId,
  } = useContext(Context);

  const [activeEmojiIds, setActiveEmojiIds] = useState<number[]>([]);

  const handleHoverIn = (reactionId: number) => {
    setHoveredReactionId(reactionId);
  };

  const handleHoverOut = () => {
    setHoveredReactionId(0);
  };

  const handleEmojiSelect = (reactionId: number) => {
    setActiveEmojiIds([...activeEmojiIds, reactionId]);
    const newUserReaction: UserReaction = {
      user_id: currentUserId,
      reaction_id: reactionId,
      content_id: currentContentId,
    };
    addUserReaction(newUserReaction);
  };

  const handleEmojiUnselect = (reactionId: number) => {
    setActiveEmojiIds(
      activeEmojiIds.filter((element) => element === reactionId)
    );
    let toDeleteUserReactionId: number | undefined = 0;
    userReactions.forEach((userReaction) => {
      if (
        userReaction.user_id === currentUserId &&
        userReaction.content_id === currentContentId &&
        userReaction.reaction_id === reactionId
      ) {
        toDeleteUserReactionId = userReaction?.id;
      }
    });

    if (toDeleteUserReactionId !== undefined)
      deleteUserReaction(toDeleteUserReactionId);
  };

  return (
    <HStack>
      {reactions
        .filter(
          (reaction) => aggregrateEmojiCount(userReactions, reaction.id) !== 0
        )
        .map((reaction) => (
          <ReactionButton
            key={reaction.id}
            emoji={reaction.emoji}
            count={aggregrateEmojiCount(userReactions, reaction.id)}
            id={reaction.id}
            isActive={activeEmojiIds.includes(reaction.id)}
            handleHoverIn={handleHoverIn}
            handleHoverOut={handleHoverOut}
            handleEmojiSelect={handleEmojiSelect}
            handleEmojiUnselect={handleEmojiUnselect}
          />
        ))}
      <TriggerButton
        reactions={reactions}
        handleEmojiSelect={handleEmojiSelect}
      />
    </HStack>
  );
};

export default TriggerComponent;
