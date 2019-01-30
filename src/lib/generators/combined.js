// TODO - implement a combined iterator generator as per the unit tests
const fibonacci = require("./fibonacci");
const triangle = require("./triangle");

const isIterable = iterable => Symbol.iterator in Object(iterable);

function* combined(iterable) {
  if (isIterable(iterable)) {
    for (let value of iterable) {
      yield value;
    }
  }
}

export default combined;
