const initialState = {
  sequences: [
    {
      name: "simple 1 to 10",
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      maxValue: 10
    },
    { name: "simple 1 to 2", data: [1, 2], maxValue: 2 }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
