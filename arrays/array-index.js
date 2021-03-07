function arrIndex(arr, idx){
  return arr.flat()
		.filter((el, i) => idx.indexOf(i + 1) > -1)
		.join('')
}

results1 = arrIndex([['m', 'u', 'b'], ['a', 's', 'h'], ['i', 'r', '1']],  [1, 3, 5, 8])
Test.assertEquals(results1, 'mbsr')

results1 = arrIndex([['m', 'y', 'e'], ['x', 'a', 'm'], ['p', 'l', 'e']], [1, 2, 3, 4, 5, 6, 7, 8, 9])
Test.assertEquals(results1, 'myexample')

results2 = arrIndex([['m', 'y', 'e'], ['x', 'a', 'm'], ['p', 'l', 'e']], [1, 5, 6])
Test.assertEquals(results2, 'mam')

results3 = arrIndex([['m', 'y', 'e'], ['x', 'a', 'm'], ['p', 'l', 'e']], [1, 3, 7, 8])
Test.assertEquals(results3, 'mepl')
