function averageIndex(arr) {
	return +(arr.reduce((acc, curVal) => acc + curVal.charCodeAt() - 96, 0) / arr.length)
		.toFixed(2)
}

averageIndex(['a','b','c','i']) // 3.75
averageIndex(['e','d','a','b','i','t']) // 6.83
averageIndex(['o','m','g']) // 11.67
averageIndex(['o','h','n','o']) // 13.0
averageIndex(['t','w','e','n','t','y','t','w','e','n','t','y']) // 17.83
averageIndex(['y','o','u','a','r','e','t','h','e','b','e','s','t']) // 12.62
