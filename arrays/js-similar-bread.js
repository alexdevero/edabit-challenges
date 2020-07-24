function hasSameBread(arr1, arr2) {
	return arr1[0] === arr2[0] && arr1[arr1.length - 1] === arr2[arr2.length - 1]
}

hasSameBread(
	["white bread", "lettuce", "white bread"],
	["white bread", "tomato", "white bread"]
) // true

hasSameBread(
	["brown bread", "chicken", "brown bread"],
	["white bread", "chicken", "white bread"]
) // false

hasSameBread(
	["toast", "cheese", "toast"],
	["brown bread", "cheese", "toast"]
) // false

hasSameBread(
	["white bread", "lettuce", "toast"],
	["white bread", "tomato", "toast"]
) // true

hasSameBread(
	["white bread", "lettuce", "toast"],
	["brown bread", "tomato", "toast"]
) // false

hasSameBread(
	["white bread", "lettuce", "brown bread"],
	["brown bread", "tomato", "white bread"]
) // false

hasSameBread(
	["white bread", "lettuce", "brown bread"],
	["white bread", "tomato", "white bread"]
) // false
