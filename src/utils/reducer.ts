/*
 * Set your ACTION here & update typing in the interface-context file
 * Implement you ACTION in the switch case.
 * If your action is async use the context file
 * Add your state in the context file
 */

import { Action } from "../types/action";
import { IState } from "../types/interface-context";

export const ACTIONS = {
  INIT_USERS: "init_users",
  INIT_REACTIONS: "initi_reactions",
  INIT_USER_REACTIONS: "init_user_reaction",
  ADD_USER_REACTION: "add_user_reaction",
  DELETE_USER_REACTION: "delete_user_reaction",
  SET_HOVERED_REACTION: "set_hovered_reaction",
};

export const reducerFunction = (state: IState, action: Action): IState => {
  switch (action.type) {
    case ACTIONS.INIT_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case ACTIONS.INIT_REACTIONS:
      return {
        ...state,
        reactions: action.payload,
      };

    case ACTIONS.INIT_USER_REACTIONS:
      return {
        ...state,
        userReactions: action.payload,
      };
    case ACTIONS.ADD_USER_REACTION:
      return {
        ...state,
        userReactions: [...state.userReactions, action.payload],
      };

    case ACTIONS.DELETE_USER_REACTION:
      return {
        ...state,
        userReactions: state.userReactions.filter(
          (userReaction) => userReaction.id === action.payload
        ),
      };

    case ACTIONS.SET_HOVERED_REACTION:
      return {
        ...state,
        hoveredReactionId: action.payload,
      };

    default:
      return state;
  }
};
