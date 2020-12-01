function notShare(arr1, arr2) {
  return arr1.every(x => !arr2.includes(x))
}

notShare([1, 2, 3], [4, 5, 6]) // true
notShare([1, 2, 3], [3, 4, 5]) // false
notShare([3, 3, 3], [4, 5, 6]) // true
notShare([3, 3, 3], [1, 2, 3]) // false
notShare([1, 2, 3, 4, 5, 6], [7]) // true
notShare([1, 2, 3, 4, 5, 6], [6]) // false
notShare([1], [2, 3, 4, 5, 6, 7]) // true
notShare([1], [1, 2, 3, 4, 5, 6]) // false
