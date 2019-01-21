function* triangle() {
  let n = 0;

  while(true) {
    yield ((n * (n + 1)) / 2)
    n += 1
  }
}

export default triangle;