function charAtPos(r, s) {
  return Array.isArray(r) ? r.filter((c, i) => s !== 'even' ? i % 2 === 0 : i % 2 !== 0) : r.split('').filter((c, i) => s !== 'even' ? i % 2 === 0 : i % 2 !== 0).join('')
}

Test.assertSimilar(charAtPos([2,4,6,8,10],"even"), [4,8])
Test.assertSimilar(charAtPos([1,2,3,4,5,6,7,8,9,10],"odd"), [1,3,5,7,9])
Test.assertEquals(charAtPos("EDABIT","even"), "DBT")
Test.assertEquals(charAtPos("EDABIT","odd"),  "EAI")
Test.assertEquals(charAtPos("QWERTYUIOP","even"), "WRYIP")
Test.assertEquals(charAtPos("POIUYTREWQ","odd"), "PIYRW")
Test.assertEquals(charAtPos("ASDFGHJKLZ","odd"), "ADGJL")
Test.assertEquals(charAtPos("ASDFGHJKLZ","even"), "SFHKZ")
Test.assertSimilar(charAtPos(["!","@","#","$","%","^","&","*","(",")"],"odd"), ["!","#","%","&","("])
Test.assertSimilar(charAtPos([")","(","*","&","^","%","$","#","@","!"],"odd"), [")","*","^","$","@"])
Test.assertSimilar(charAtPos(["A","R","B","I","T","R","A","R","I","L","Y"],"odd"), ["A","B","T","A","I","Y"])
