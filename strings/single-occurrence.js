function singleOccurrence(str) {
	return [...str.toUpperCase()].filter((val, i, arr) => arr.indexOf(val) === arr.lastIndexOf(val)).join('')
}

singleOccurrence("EFFEAABbc") // "C"
singleOccurrence("AAAAVNNNNSS") // "V"
singleOccurrence("S") // "S"
singleOccurrence("") // ""
singleOccurrence("eEDABITaebiT") // "D"
singleOccurrence("iSs") // "I"
singleOccurrence("GOODd") // "G"
