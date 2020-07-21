function bomb(str) {
	return str.search(/bomb/ig) > -1 ? 'Duck!!!' : 'There is no bomb, relax.'
}

bomb("There is a bomb.") // "Duck!!!"
bomb("Hey, did you find it?") // "There is no bomb, relax."
bomb("Hey, did you think there is a bomb?") // "Duck!!!"
bomb("This goes boom!!!") // "There is no bomb, relax."
bomb("Hey, did you find the BoMb?") // "Duck!!!"
