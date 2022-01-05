/*
 * To add your state
 * Put it in the initial state, add typing in the interface-context file
 * Use the reducer file to set Actions on this state
 * Make your calls here and pass it in the values
 */

import axios from "axios";
import { createContext, useReducer, useEffect, FC } from "react";
import { apiUrl, fallbackApiUrl } from "./apis";
import { ACTIONS, reducerFunction } from "./reducer";
import { UserReaction } from "../types/user-reaction";
import { IContext } from "../types/interface-context";
import { User } from "../types/user";
import { Reaction } from "../types/reaction";

const initialState = {
  hoveredReactionId: 0,
  userReactions: [] as UserReaction[],
  currentContentId: 1,
  currentUserId: 1,
  users: [] as User[],
  reactions: [] as Reaction[],
};

export const Context = createContext<IContext>(initialState);

export const ContextProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  useEffect(() => {
    initializeUserReactions();
    initializeReactions();
    initializeUsers();
  }, [dispatch]);

  const initializeUsers = () => {
    axios
      .get(apiUrl + "users")
      .then((response) => {
        dispatch({
          type: ACTIONS.INIT_USERS,
          payload: response.data,
        });
      })
      .catch(() => {
        axios
          .get(fallbackApiUrl + "users")
          .then((response) => {
            dispatch({
              type: ACTIONS.INIT_USERS,
              payload: response.data,
            });
          })
          .catch((error) => {
            console.error("[ERROR] Failed to fetch initial list of user");
            console.log(error);
          });
      });
  };

  const initializeReactions = () => {
    axios
      .get(apiUrl + "reactions")
      .then((response) => {
        dispatch({
          type: ACTIONS.INIT_REACTIONS,
          payload: response.data,
        });
      })
      .catch(() => {
        axios
          .get(fallbackApiUrl + "reactions")
          .then((response) => {
            dispatch({
              type: ACTIONS.INIT_REACTIONS,
              payload: response.data,
            });
          })
          .catch((error) => {
            console.error("[ERROR] Failed to fetch initial list of reactions");
            console.log(error);
          });
      });
  };

  const initializeUserReactions = () => {
    axios
      .get(
        apiUrl + `user_content_reactions?content_id=${state.currentContentId}`
      )
      .then((response) => {
        dispatch({
          type: ACTIONS.INIT_USER_REACTIONS,
          payload: response.data,
        });
      })
      .catch(() => {
        axios
          .get(
            fallbackApiUrl +
              `user_content_reactions?content_id=${state.currentContentId}`
          )
          .then((response) => {
            dispatch({
              type: ACTIONS.INIT_USER_REACTIONS,
              payload: response.data,
            });
          })
          .catch((error) => {
            console.error(
              "[ERROR] Failed to fetch initial list of user reactions"
            );
            console.log(error);
          });
      });
  };

  const setHoveredReactionId = (id: number) => {
    dispatch({
      type: ACTIONS.SET_HOVERED_REACTION,
      payload: id,
    });
  };

  const addUserReaction = (userReaction: UserReaction) => {
    axios
      .post(apiUrl + "user_content_reactions", userReaction)
      .then((response) => {
        if (response.status === 201) {
          const newUserReaction = { ...userReaction, id: response.data };
          dispatch({
            type: ACTIONS.ADD_USER_REACTION,
            payload: newUserReaction,
          });
        }
      })
      .catch(() => {
        return axios
          .get(fallbackApiUrl + "user_content_reactions")
          .then((response) => {
            if (response.status === 201) {
              const newUserReaction = { ...userReaction, id: response.data };
              dispatch({
                type: ACTIONS.ADD_USER_REACTION,
                payload: newUserReaction,
              });
            }
          })
          .catch((error) => {
            console.error(
              `[ERROR] Could NOT add user reaction: ${userReaction}`
            );
            console.log(error);
          });
      });
  };

  const deleteUserReaction = (id: number) => {
    axios
      .delete(apiUrl + `user_content_reactions/${id}`)
      .then((response) => {
        dispatch({
          type: ACTIONS.DELETE_USER_REACTION,
          payload: response.data,
        });
      })
      .catch(() => {
        return axios
          .get(fallbackApiUrl + "user_content_reactions")
          .then((response) => {
            dispatch({
              type: ACTIONS.DELETE_USER_REACTION,
              payload: response.data,
            });
          })
          .catch((error) => {
            console.error(`[ERROR]: Could NOT delete user ${id}`);
            console.log(error);
          });
      });
  };

  return (
    <Context.Provider
      value={{
        hoveredReactionId: state.hoveredReactionId,
        userReactions: state.userReactions,
        currentContentId: state.currentContentId,
        currentUserId: state.currentUserId,
        reactions: state.reactions,
        users: state.users,
        setHoveredReactionId,
        addUserReaction,
        deleteUserReaction,
      }}
    >
      {children}
    </Context.Provider>
  );
};
