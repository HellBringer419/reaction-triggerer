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

const initialState = {
  hoveredReactionId: 0,
  userReactions: [] as UserReaction[],
  isLoadingUserReactions: true,
};

export const Context = createContext<IContext>(initialState);

export const ContextProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  useEffect(() => {
    axios
      .get(apiUrl + "user_content_reactions")
      .then((response) => {
        dispatch({
          type: ACTIONS.INIT_REACTIONS,
          payload: response.data,
        });
        dispatch({
          type: ACTIONS.LOADED_REACTIONS,
        });
      })
      .catch(() => {
        return axios
          .get(fallbackApiUrl + "user_content_reactions")
          .then((response) => {
            dispatch({
              type: ACTIONS.INIT_REACTIONS,
              payload: response.data,
            });
            dispatch({
              type: ACTIONS.LOADED_REACTIONS,
            });
          })
          .catch((error) => {
            console.error(
              "[ERROR] Failed to fetch initial list of user reactions"
            );
            console.log(error);
          });
      });
  }, [dispatch]);

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
            type: ACTIONS.ADD_REACTION,
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
                type: ACTIONS.ADD_REACTION,
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
          type: ACTIONS.INIT_REACTIONS,
          payload: response.data,
        });
        dispatch({
          type: ACTIONS.LOADED_REACTIONS,
        });
      })
      .catch(() => {
        return axios
          .get(fallbackApiUrl + "user_content_reactions")
          .then((response) => {
            dispatch({
              type: ACTIONS.INIT_REACTIONS,
              payload: response.data,
            });
            dispatch({
              type: ACTIONS.LOADED_REACTIONS,
            });
          })
          .catch((error) => {
            console.error(`[ERROR]: Could NOT delete user ${id}`);
            console.log(error);
          });
      });

    dispatch({
      type: ACTIONS.DELETE_REACTION,
      payload: id,
    });
  };

  return (
    <Context.Provider
      value={{
        hoveredReactionId: state.hoveredReactionId,
        userReactions: state.userReactions,
        isLoadingUserReactions: state.isLoadingUserReactions,
        setHoveredReactionId,
        addUserReaction,
        deleteUserReaction,
      }}
    >
      {children}
    </Context.Provider>
  );
};
