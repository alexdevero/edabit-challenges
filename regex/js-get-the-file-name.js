function getFilename(path) {
	return path.replace(/.*\//g, '')
}

getFilename("C:/Projects/pil_tests/ascii/edabit.txt") // "edabit.txt"
getFilename("C:/Users/johnsmith/Music/Beethoven_5.mp3") // "Beethoven_5.mp3"
getFilename("ffprobe.exe") // "ffprobe.exe"
getFilename("Music/Drafts/unfinished2.midi") // "unfinished2.midi"
getFilename("C:/Users/chad/OneDrive/Desktop/Atom.lnk") // "Atom.lnk"
getFilename("senoron/OneDrive/Desktop/DDLC-1.1.1-pc/lib/windows-i686/DDLC.exe") // "DDLC.exe"
