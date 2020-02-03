const arr = [1, 2, 3, 4, 5, 6]
const [a, b] = arr
// Create variables a and b from the given array using es6 array destructuring,
// where a === 1 and b === 2

const arr = [1, 2, 3, 4, 5, 6]

function test(x) {
 return x === arr[0] || x === arr[1] ? true : false
}

test(a) // true, "Variable a does not equal 1"
test(b) // true, "Variable b does not equal 2"
