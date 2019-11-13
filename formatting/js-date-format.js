function formatDate(userDate) {
	return `${userDate.split('/')[2]}${userDate.split('/')[1]}${userDate.split('/')[0]}`
}

formatDate('11/12/2019') //'20191211'
formatDate('12/31/2019') // '20193112'
formatDate('01/15/2019') // '20191501'
