function reverse(str) {
	return str
    .split('')
    .reverse()
    .map(char => char.toLowerCase() === char ? char.toUpperCase() : char.toLowerCase()).join('')
}

reverse("Hello World") // "DLROw OLLEh"
reverse("ReVeRsE") // "eSrEvEr"
reverse("") // ""
reverse("Radar") // "RADAr"
