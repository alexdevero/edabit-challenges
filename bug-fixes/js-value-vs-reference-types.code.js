// Fix this broken code!
function checkEquals(arr1, arr2) {
	if (arr1.toString() === arr2.toString()) {
  	return true
  } else {
  	return false
  }
}

checkEquals([1, 2], [1, 3]) // false
checkEquals([1, 2], [1, 2]) // true
checkEquals([4, 5, 6], [4, 5, 6]) // true
checkEquals([4, 7, 6], [4, 5, 6]) // false
