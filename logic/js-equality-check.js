// Fix this wrong function!
function checkEquality(a, b) {
  return a === b;
}

checkEquality(0, "") // false
checkEquality(1, "1") // false
checkEquality(true, 1) // false
checkEquality(0, false) // false
checkEquality(null, undefined) // false
