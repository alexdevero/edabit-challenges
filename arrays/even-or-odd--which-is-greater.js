const evenOrOdd = str => (
	diff = [...str].reduce((a, c) => c % 2 ? a - +c : a + +c, 0),
	diff < 0 ? 'Odd is greater than Even' : diff > 0 ? 'Even is greater than Odd' : 'Even and Odd are the same'
)

evenOrOdd('12345') // 'Odd is greater than Even'
evenOrOdd('143') // 'Even and Odd are the same'
evenOrOdd('2221') // 'Even is greater than Odd'
evenOrOdd('23456') // 'Even is greater than Odd'
evenOrOdd('4321') // 'Even is greater than Odd'
evenOrOdd('3245') // 'Odd is greater than Even'
evenOrOdd('14256') // 'Even is greater than Odd'
evenOrOdd('11234') // 'Even is greater than Odd'
evenOrOdd('1734') // 'Odd is greater than Even'
evenOrOdd('145') // 'Odd is greater than Even'
evenOrOdd('22471') // 'Even and Odd are the same'
evenOrOdd('213613') // 'Even and Odd are the same'
evenOrOdd('23456') // 'Even is greater than Odd'
evenOrOdd('9738') // 'Odd is greater than Even'
evenOrOdd('34522') // 'Even and Odd are the same'
evenOrOdd('12378') // 'Odd is greater than Even'
evenOrOdd('45228') // 'Even is greater than Odd'
evenOrOdd('4455') // 'Odd is greater than Even'
evenOrOdd('6721') // 'Even and Odd are the same'
evenOrOdd('92184') // 'Even is greater than Odd')
evenOrOdd('12') // 'Even is greater than Odd'
evenOrOdd('123') // 'Odd is greater than Even'
evenOrOdd('112') // 'Even and Odd are the same'
evenOrOdd('124') // 'Even is greater than Odd'
