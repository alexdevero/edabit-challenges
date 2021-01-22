function averageIndex(arr) {
	return +(arr.reduce((acc, curVal) => acc + curVal.charCodeAt() - 96, 0) / arr.length)
		.toFixed(2)
}

Test.assertEquals(averageIndex(['a','b','c','i']), 3.75)
Test.assertEquals(averageIndex(['e','d','a','b','i','t']), 6.83)
Test.assertEquals(averageIndex(['o','m','g']),11.67)
Test.assertEquals(averageIndex(['o','h','n','o']),13.0)
Test.assertEquals(averageIndex(['t','w','e','n','t','y','t','w','e','n','t','y']),17.83)
Test.assertEquals(averageIndex(['y','o','u','a','r','e','t','h','e','b','e','s','t']),12.62)
