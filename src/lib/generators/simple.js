function* simple() {
  let n = 0;

  while (true) {
    yield n + 1;
    n += 1;
  }
}

export default simple;
