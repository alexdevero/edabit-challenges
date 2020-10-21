function intToString(num) {
	return '' + num
}

function stringToInt(num) {
	return +num
}

let flag = true;
function toggleFlag() {
	flag = false;
}
oldToString = Object.prototype.toString;
Number.prototype.toString = function() {
	toggleFlag();
	return "" + this
}
oldParseInt = parseInt;
parseInt = function() {
	toggleFlag();
	return oldParseInt(...arguments);
}
oldParseFloat = parseFloat;
parseFloat = function() {
	toggleFlag();
	return oldParseFloat(...arguments);
}

Test.assertEquals(intToString(4), '4')
Test.assertEquals(intToString(65), '65')
Test.assertEquals(intToString(29348), '29348')
Test.assertEquals(intToString(49583908545), '49583908545')

Test.assertEquals(stringToInt('4'), 4)
Test.assertEquals(stringToInt('65'), 65)
Test.assertEquals(stringToInt('29348'), 29348)
Test.assertEquals(stringToInt('49583908545'), 49583908545)

console.log(flag ? "Bonus points!" : "You recieve no bonus points.")
