import { ADD_SEQUENCE, SET_SEQUENCE_DISPLAYED } from "./action-types";

export const addSequence = payload => ({ type: ADD_SEQUENCE, payload });

export const setSequenceDisplayed = payload => ({
  type: SET_SEQUENCE_DISPLAYED,
  payload
});
