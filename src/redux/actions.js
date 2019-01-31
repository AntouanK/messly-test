import {
  ADD_SEQUENCE,
  SET_SEQUENCE_DISPLAYED,
  SET_SEQUENCE_MAX_VALUES
} from "./action-types";

export const addSequence = payload => ({ type: ADD_SEQUENCE, payload });

export const setSequenceDisplayed = payload => ({
  type: SET_SEQUENCE_DISPLAYED,
  payload
});

export const setSequenceMaxValues = payload => ({
  type: SET_SEQUENCE_MAX_VALUES,
  payload
});
