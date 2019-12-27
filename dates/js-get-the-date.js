function getDay(day) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
	return days[new Date(day).getDay()]
}

getDay('12/07/2016') // 'Wednesday'
getDay('12/08/2011') // 'Thursday'
getDay('09/04/2016') // 'Sunday'
getDay('06/08/2012') // 'Friday'
getDay('08/13/2019') // 'Tuesday'
