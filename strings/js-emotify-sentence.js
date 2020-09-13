function emotify(str) {
	const emojis = { 'smile': ':D', 'grin': ':)', 'sad': ':(', 'mad': ':P' }

  return str.replace(/smile|grin|sad|mad/g, (word) => emojis[word])
}

emotify("Make me smile") // "Make me :D"
emotify("Make me grin") // "Make me :)"
emotify("Make me sad") // "Make me :("
emotify("Make me mad") // "Make me :P"
