import fibonacci from '../lib/generators/fibonacci';

describe("The fibonacci generator", () => {
  var generator;

  beforeEach(() => {
    generator = fibonacci();
  });

  describe("next", () => {
    it("returns the sum of the previous two numbers", () => {
      expect(generator.next().value).toEqual(0);
      expect(generator.next().value).toEqual(1);
      expect(generator.next().value).toEqual(1);
      expect(generator.next().value).toEqual(2);
      expect(generator.next().value).toEqual(3);
      expect(generator.next().value).toEqual(5);
      expect(generator.next().value).toEqual(8);
      expect(generator.next().value).toEqual(13);
      expect(generator.next().value).toEqual(21);
      expect(generator.next().value).toEqual(34);
      expect(generator.next().value).toEqual(55);
      expect(generator.next().value).toEqual(89);
      expect(generator.next().value).toEqual(144);
    });
  });
});