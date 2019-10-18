function filterStateNames(arr, type) {
	return (type === 'abb') ? arr.filter(item => item.length <= 2 ? 1 : 0) : arr.filter(item => item.length >= 3 ? 1 : 0)
}

filterStateNames(['Arizona', 'CA', 'NY', 'Nevada'], 'abb') // ['CA', 'NY']
filterStateNames(['Arizona', 'CA', 'NY', 'Nevada'], 'full') // ['Arizona', 'Nevada']
filterStateNames(['MT', 'NJ', 'TX', 'ID', 'IL'], 'abb') // ['MT', 'NJ', 'TX', 'ID', 'IL']
filterStateNames(['MT', 'NJ', 'TX', 'ID', 'IL'], 'full') // []
filterStateNames(['Montana', 'FL'], 'abb') // ['FL']
filterStateNames(['Montana', 'FL'], 'full') // ['Montana']