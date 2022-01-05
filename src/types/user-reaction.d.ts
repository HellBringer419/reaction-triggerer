import { Reaction } from "./reaction";
import { User } from "./user";

export interface UserReaction {
  id?: number;
  user_id?: number;
  reaction_id?: number;
  content_id?: number;
}
