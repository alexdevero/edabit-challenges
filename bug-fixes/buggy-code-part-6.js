function removeNumbers(str) {
  // Or: str.replace(/\d/g,'')

  return str.split('')
		.filter(c => isNaN(c))
		.join('')
}

removeNumbers("mubashir1") // "mubashir"
removeNumbers("12ma23tt") // "matt"
removeNumbers("e1d2a3b4i5t6") // "edabit"
removeNumbers("pakistan007") // "pakistan"
removeNumbers("ai4653rf53or4235ce") // "airforce"
