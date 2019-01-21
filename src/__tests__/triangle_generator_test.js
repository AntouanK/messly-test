import triangle from '../lib/generators/triangle';

describe("The triangle generator", () => {
  var generator;

  beforeEach(() => {
    generator = triangle();
  });

  describe("next", () => {
    it("returns the sum of the previous two numbers", () => {
      expect(generator.next().value).toEqual(0);
      expect(generator.next().value).toEqual(1);
      expect(generator.next().value).toEqual(3);
      expect(generator.next().value).toEqual(6);
      expect(generator.next().value).toEqual(10);
      expect(generator.next().value).toEqual(15);
      expect(generator.next().value).toEqual(21);
      expect(generator.next().value).toEqual(28);
      expect(generator.next().value).toEqual(36);
      expect(generator.next().value).toEqual(45);
      expect(generator.next().value).toEqual(55);
    });
  });
});