import fibonacci from "../lib/generators/fibonacci";
import triangle from "../lib/generators/triangle";
import combined from "../lib/generators/combined";

describe("Combined generator", () => {
  describe("with no generators", () => {
    it("returns empty sequence", () => {
      let generator = combined();
      expect(generator.next().done).toEqual(true);
      expect(generator.next().value).toBeUndefined();
    });
  });

  describe("with a single iteratable", () => {
    let generator = combined([1, 2, 3, 4, 5]);

    expect(generator.next().value).toEqual(1);
    expect(generator.next().value).toEqual(2);
    expect(generator.next().value).toEqual(3);
    expect(generator.next().value).toEqual(4);
    expect(generator.next().value).toEqual(5);
    expect(generator.next().value).toBeUndefined();
  });

  describe("with two empty arrays", () => {
    let generator = combined([], []);

    expect(generator.next().done).toEqual(true);
    expect(generator.next().value).toBeUndefined();
  });

  describe("with an empty array and a finite sequence", () => {
    let generator = combined([], [1, 2, 3, 4, 5]);

    expect(generator.next().value).toEqual(1);
    expect(generator.next().value).toEqual(2);
    expect(generator.next().value).toEqual(3);
    expect(generator.next().value).toEqual(4);
    expect(generator.next().value).toEqual(5);
    expect(generator.next().value).toBeUndefined();
  });

  describe("with a finite sequence and an empty array", () => {
    let generator = combined([1, 2, 3, 4, 5], []);

    expect(generator.next().value).toEqual(1);
    expect(generator.next().value).toEqual(2);
    expect(generator.next().value).toEqual(3);
    expect(generator.next().value).toEqual(4);
    expect(generator.next().value).toEqual(5);
    expect(generator.next().value).toBeUndefined();
  });

  describe("with an infinite sequence and a finite one", () => {
    let generator = combined(fibonacci(), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    let sequence = [];

    for (let i = 0; i < 20; i++) {
      sequence.push(generator.next().value);
    }

    expect(sequence).toEqual([
      0,
      1,
      1,
      1,
      2,
      2,
      3,
      3,
      4,
      5,
      5,
      6,
      7,
      8,
      8,
      9,
      10,
      13,
      21,
      34
    ]);
  });

  describe("with two infinite sequences", () => {
    let generator = combined(fibonacci(), triangle());

    let sequence = [];

    for (let i = 0; i < 20; i++) {
      sequence.push(generator.next().value);
    }

    expect(sequence).toEqual([
      0,
      0,
      1,
      1,
      1,
      2,
      3,
      3,
      5,
      6,
      8,
      10,
      13,
      15,
      21,
      21,
      28,
      34,
      36,
      45
    ]);
  });

  describe("with three finite sequences", () => {
    let generator = combined(
      [1, 2, 3, 4, 5],
      [1, 2, 3],
      [4, 5, 6, 7, 8, 9, 10]
    );

    let sequence = [];

    for (let i = 0; i < 15; i++) {
      sequence.push(generator.next().value);
    }

    expect(sequence).toEqual([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 7, 8, 9, 10]);
  });

  describe("with three infinite sequences", () => {
    let generator = combined(fibonacci(), fibonacci(), fibonacci());

    let sequence = [];

    for (let i = 0; i < 12; i++) {
      sequence.push(generator.next().value);
    }

    expect(sequence).toEqual([0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 2]);
  });
});
