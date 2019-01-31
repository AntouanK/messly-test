const isIterable = iterable => Symbol.iterator in Object(iterable);

function* combined() {
  const stack = [];
  const iterables = [];

  // keep list of available iterables
  for (let iterable of arguments) {
    if (isIterable(iterable)) {
      iterables.push(iterable);
    }
  }

  // function to always give us
  // the next available values
  const populateValues = () => {
    const nextValues = [];
    for (let iterable of iterables) {
      if (isIterable(iterable)) {
        if (typeof iterable.next === "function") {
          let next = iterable.next();
          if (!next.done) {
            nextValues.push(next.value);
          }
        } else if (Array.isArray(iterable)) {
          nextValues.push(iterable[0]);
          iterable.splice(0, 1);
        }
      }
    }

    return nextValues
      .filter(v => v !== undefined)
      .map(v => {
        stack.push(v);
        return v;
      });
  };

  // initialise to see if there's anything to start looping for
  populateValues();
  // flag to tell us if we're done
  let done = stack.length === 0;
  while (!done) {
    // get next values in the stack
    populateValues();
    // fine minimum value from stack
    let minValue = Math.min(...stack);
    // remove it from stack since we are going to yield it
    let indexOfMin = stack.indexOf(minValue);
    // mutate stack to remove the min value
    if (indexOfMin > -1) {
      stack.splice(indexOfMin, 1);
    }
    done = stack.length === 0;
    // make sure we won't return Infinity
    yield minValue === Infinity ? undefined : minValue;
  }
}

//------------------------------------------------------------------------------
export default combined;
