const arr = ["cars", "planes", ["trains", ["motorcycles"]]]

// Fix the following using es6 destructuring
// Only edit what's inside of [ trans1, trans2, trans3, trans4 ]
let [ trans1, trans2, [trans3, [trans4]] ] = arr

/*
console.log(trans1) // should output "cars"
console.log(trans2) // should output "planes"
console.log(trans3) // should output "trains"
console.log(trans4) // should output "motorcycles"
*/

trans1 // "cars", 'trans1 does not equal "cars"'
trans2 // "planes", 'trans2 does not equal "planes"'
trans3 // "trains", 'trans3 does not equal "trains"'
trans4 // "motorcycles", 'trans4 does not equal "motorcycles"'
