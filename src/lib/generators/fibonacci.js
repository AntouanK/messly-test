function* fibonacci() {
  let a = 0
  let b = 1;

  while(true) {
    yield a;

    let next = a + b;
    a = b;
    b = next;
  }
}

export default fibonacci;