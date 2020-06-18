// Fix this incorrect code so that all tests pass!
function flatten(arr) {
  let arr2 = [];

  for (let i = 0; i < arr.length; i++) {
    arr2 = arr2.concat(arr[i]);
  }
  return arr2;
}

flatten([[1, 2], [3, 4]]) // [1, 2, 3, 4]
flatten([['a', 'b'], ['c', 'd']]) // ['a', 'b', 'c', 'd']
flatten([[true, false], [false, false]]) // [true, false, false, false]
