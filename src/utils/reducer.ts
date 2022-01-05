/*
 * Set your ACTION here & update typing in the interface-context file
 * Implement you ACTION in the switch case.
 * If your action is async use the context file
 * Add your state in the context file
 */

import { Action } from "../types/action";
import { IState } from "../types/interface-context";

export const ACTIONS = {
  INIT_REACTIONS: "init",
  LOADED_REACTIONS: "loaded",
  SET_HOVERED_REACTION: "set_hovered_reaction",
  ADD_REACTION: "add_reaction",
  DELETE_REACTION: "delete_reaction",
};

export const reducerFunction = (state: IState, action: Action): IState => {
  switch (action.type) {
    case ACTIONS.INIT_REACTIONS:
      return {
        ...state,
        userReactions: action.payload,
      };

    case ACTIONS.LOADED_REACTIONS:
      return {
        ...state,
        isLoadingUserReactions: false,
      };

    case ACTIONS.SET_HOVERED_REACTION:
      return {
        ...state,
        hoveredReactionId: action.payload,
      };

    case ACTIONS.ADD_REACTION:
      return {
        ...state,
        userReactions: [...state.userReactions, action.payload],
      };

    case ACTIONS.DELETE_REACTION:
      return {
        ...state,
        userReactions: state.userReactions.filter(
          (userReaction) => userReaction.id === action.payload
        ),
      };

    default:
      return state;
  }
};
