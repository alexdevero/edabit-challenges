function daysUntil2021(date) {
	const finish = new Date('1/1/2022')
	const start = new Date(date)
	const result = ((finish - start) / 86400000) - 365

	return `${result} ${result > 1 ? 'days' : 'day'}`
}

daysUntil2021("12/29/2020") // "3 days"
daysUntil2021("1/1/2020") // "366 days"
daysUntil2021("2/28/2020") // "308 days"
daysUntil2021("6/30/2020") // "185 days"
daysUntil2021("10/22/2020") // "71 days"
daysUntil2021("12/31/2020") // "1 day"