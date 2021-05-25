function isAnagram(s1, s2) {
  const str1 = s1.toLowerCase().split('').sort().join('').trim()
  const str2 = s2.toLowerCase().split('').sort().join('').trim()

  return str1 === str2
}

isAnagram("cristian", "Cristina") // true
isAnagram("Dave Barry", "Ray Adverb") // true
isAnagram("Nope", "Note") // false
isAnagram("Apple", "Appeal") // false