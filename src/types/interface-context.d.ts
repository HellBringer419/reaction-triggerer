import { UserReaction } from "./user-reaction";

export interface IState {
  hoveredReactionId: number;
  userReactions: UserReaction[];
  isLoadingUserReactions: boolean;
}

export interface IContext extends IState {
  setHoveredReactionId?: (number) => void;
  addUserReaction?: (UserReaction) => void;
  deleteUserReaction?: (number) => void;
}
