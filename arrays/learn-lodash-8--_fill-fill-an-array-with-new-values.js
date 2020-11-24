const fill = (arr, value, start = 0, end = arr.length) => {
	return arr.fill(value, start, end)
}

Test.assertSimilar(fill([1, 2, 3], "a"), ["a", "a", "a"]);
Test.assertSimilar(fill(Array(3), 2), [2, 2, 2]);
Test.assertSimilar(fill([4, 6, 8, 10], "*", 1, 3), [4, "*", "*", 10]);
Test.assertSimilar(
  fill(
    [
      { make: "toyota", color: "red" },
      { make: "ford", color: "blue" },
      { make: "mazda", color: "grey" },
      { make: "ford", color: "green" },
    ],
    "TRUCKS!",
    1,
    2
  ),
  [
    {
      make: "toyota",
      color: "red",
    },
    "TRUCKS!",
    {
      make: "mazda",
      color: "grey",
    },
    {
      make: "ford",
      color: "green",
    },
  ]
);
