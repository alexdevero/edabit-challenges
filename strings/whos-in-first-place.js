function firstPlace(road) {
  return road.length === 0 ? 'No road available' : road.replace(/=/g, '').length === 0 ? 'No car available' : road.replace(/=/g, '')[road.replace(/=/g, '').length - 1]
}

Test.assertEquals(firstPlace("====b===O===e===U=A=="), "A")
Test.assertEquals(firstPlace("e==B=Fe"), "e")
Test.assertEquals(firstPlace("proeNeoOJGnfl"), "l")
Test.assertEquals(firstPlace("F============="), "F")
Test.assertEquals(firstPlace("C===A===R"), "R")
Test.assertEquals(firstPlace("p"), "p")
Test.assertEquals(firstPlace("=========================="), 'No car available')
Test.assertEquals(firstPlace(""), 'No road available')
