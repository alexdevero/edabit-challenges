function compact(arr) {
	return arr.filter(el => !!el)
}

Test.assertSimilar(compact([1,0,false,null,undefined,"banana"]), [1,'banana']);
Test.assertSimilar(compact([]), []);
Test.assertSimilar(
  compact(
    [
      {
        color: "red",
        make: "toyota",
      },
      {
        color: "blue",
        make: "mazda",
      },
    ],
    null
  ),
  [
    {
      color: "red",
      make: "toyota",
    },
    {
      color: "blue",
      make: "mazda",
    },
  ]
);
