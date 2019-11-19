function reverseCase(str) {
	return str.split('').map(char => char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()).join('')
}

reverseCase('Happy Birthday') // 'hAPPY bIRTHDAY'
reverseCase('MANY THANKS') // 'many thanks'
reverseCase('sPoNtAnEoUs') // 'SpOnTaNeOuS'
reverseCase('eXCELLENT, yOuR mAJESTY') // 'Excellent, YoUr Majesty'
