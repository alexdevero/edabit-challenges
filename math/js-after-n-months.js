function afterNMonths(year, months) {
	return months === undefined ? 'month missing' : year === undefined ? 'year missing' : Math.floor(year + (months / 12))
}

Test.assertEquals(afterNMonths(2020, 24), 2022);
Test.assertEquals(afterNMonths(1832, 2), 1832);
Test.assertEquals(afterNMonths(1444, 60), 1449);
Test.assertEquals(afterNMonths(2020, undefined), 'month missing');
Test.assertEquals(afterNMonths(undefined, 2), 'year missing');
Test.assertEquals(afterNMonths(1444, 65), 1449);
