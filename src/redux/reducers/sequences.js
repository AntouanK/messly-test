import { ADD_SEQUENCE } from "../action-types";
import fibonacci from "../../lib/generators/fibonacci";
import triangle from "../../lib/generators/triangle";
import combined from "../../lib/generators/combined";
import simple from "../../lib/generators/simple";

const initialState = {
  sequences: []
};

// helper to get a generator based on a string type
const getGenerator = type => {
  if (type === "simple") {
    return simple();
  } else if (type === "fibonacci") {
    return fibonacci();
  } else if (type === "triangle") {
    return triangle();
  } else {
    throw new Error("unknown generator type");
  }
};

//
// given a generator, and a nubmer of max values, we return a list
// of that many values
const getValues = generator => maxValues => {
  const data = [];
  for (let i = 0; i < maxValues; i += 1) {
    data.push(generator.next().value);
  }

  return data;
};

//
//
export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_SEQUENCE: {
      const { type, maxValues, displayType = "values" } = action.payload;
      let newType = type;
      let generator;

      if (typeof type === "string") {
        generator = getGenerator(type);
      } else if (Array.isArray(type)) {
        newType = type.join(" + ");
        const sequencesToCombine = type
          .map(getGenerator)
          .map(getValues)
          .map(fn => fn(maxValues));
        generator = combined(...sequencesToCombine);
      }

      let newSequence = {
        type: newType,
        maxValues,
        displayType,
        data: getValues(generator)(maxValues)
      };

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
