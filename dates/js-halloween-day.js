function halloween(dt) {
	return dt.getMonth() === 9 && dt.getDate() === 31 ? 'Bonfire toffee' : 'toffee'
}

halloween(new Date("2013/10/31")) // "Bonfire toffee"
halloween(new Date("2012/07/31")) // "toffee"
halloween(new Date("2015/10/31")) // "Bonfire toffee"
halloween(new Date("2011/10/12")) // "toffee"
halloween(new Date("2008/10/11")) // "toffee"
