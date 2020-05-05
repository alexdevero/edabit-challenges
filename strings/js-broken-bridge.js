function isSafeBridge(str) {
	return str.search(/\s/) === -1
}

isSafeBridge("####") // true
isSafeBridge("## ####") // false
isSafeBridge("#") // true
isSafeBridge("# #") // false
