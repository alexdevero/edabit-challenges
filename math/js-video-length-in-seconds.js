function minutesToSeconds(time) {
	return parseInt(time.split(':')[1]) >= 60 ? false : (parseInt(time.split(':')[0]) * 60) + parseInt(time.split(':')[1])
}

minutesToSeconds('01:00') // 60
minutesToSeconds('13:56') // 836
minutesToSeconds('10:60') // false, '60 is invalid'
minutesToSeconds('132:21') // 7941
minutesToSeconds('132:271') // false
minutesToSeconds('01:30') // 90
minutesToSeconds('10:00') // 600
