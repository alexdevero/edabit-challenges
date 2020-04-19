function isJS(path) {
	return /\.js(x)?$/.test(path)
}

isJS("/users/user.jsx") // true
isJS("/users/user.js") // true
isJS("/users/user.ts") // false
isJS("/users/user.jpg") // false
isJS("/users/user.ext") // false
isJS("/users/user.php") // false
