import { ADD_SEQUENCE } from "../action-types";
import fibonacci from "../../lib/generators/fibonacci";
import triangle from "../../lib/generators/triangle";
import combined from "../../lib/generators/combined";
import simple from "../../lib/generators/simple";

const initialState = {
  sequences: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_SEQUENCE: {
      const { type, maxValues } = action.payload;

      let generator;

      if (type === "simple") {
        generator = simple();
      } else if (type === "fibonacci") {
        generator = fibonacci();
      } else if (type === "triangle") {
        generator = triangle();
      } else {
        throw new Error("unknown generator type");
      }

      let newSequence = { type, maxValues, data: [] };
      for (let i = 0; i < maxValues; i += 1) {
        newSequence.data.push(generator.next().value);
      }

      const sequences = state.sequences.concat(newSequence);

      return {
        ...state,
        sequences
      };
    }

    default:
      return state;
  }
}
