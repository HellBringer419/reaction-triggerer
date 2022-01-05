import { UserReaction } from "../types/user-reaction";

export const aggregrateEmojiCount = (
  userReactions: UserReaction[],
  reactionId: number
) => {
  return userReactions.filter(
    (userReaction) => userReaction.reaction_id === reactionId
  ).length;
};
