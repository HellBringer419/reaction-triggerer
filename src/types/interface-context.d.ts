import { Reaction } from "./reaction";
import { User } from "./user";
import { UserReaction } from "./user-reaction";

export interface IState {
  hoveredReactionId: number;
  userReactions: UserReaction[];
  users: User[];
  reactions: Reaction[];
  currentContentId: number;
  currentUserId: number;
}

export interface IContext extends IState {
  setHoveredReactionId: (number) => void;
  addUserReaction: (UserReaction) => void;
  deleteUserReaction: (number) => void;
}
