const add2 = (x) => x + 2

const add3 = (x) => x + 3

const add5 = (x) => x + 5

const add7 = (x) => x + 7

const add11 = (x) => x + 11

Test.assertEquals(add2(1), 3)
Test.assertEquals(add2(9), 11)
Test.assertEquals(add2(435), 437)

Test.assertEquals(add3(1), 4)
Test.assertEquals(add3(9), 12)
Test.assertEquals(add3(435), 438)

Test.assertEquals(add5(1), 6)
Test.assertEquals(add5(9), 14)
Test.assertEquals(add5(435), 440)

Test.assertEquals(add7(1), 8)
Test.assertEquals(add7(9), 16)
Test.assertEquals(add7(435), 442)

Test.assertEquals(add11(1), 12)
Test.assertEquals(add11(9), 20)
Test.assertEquals(add11(435), 446)
