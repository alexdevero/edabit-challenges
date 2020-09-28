function countDs(sentence) {
	return sentence.split(/D/gi).length - 1
}

countDs("My friend Dylan got distracted at school") // 4
countDs("Debris was scattered all over the place.") // 2
countDs("The rodents hibernated in their den.") // 3
