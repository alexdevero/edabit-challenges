function sortWord(word) {
	return word.split('').sort().join('');
}

sortWord("dcba") // "abcd"
sortWord("pneumonoultramicroscopicsilicovolcanoconiosis") // "aacccccceiiiiiilllmmnnnnooooooooopprrsssstuuv"
sortWord("Unpredictable") // "Uabcdeeilnprt", "Capital letters should come first!"
sortWord("a") // "a"
sortWord("ability") // "abiilty"
sortWord("able") // "abel"
sortWord("about") // "abotu"
sortWord("above") // "abeov"
sortWord("accept") // "accept"
