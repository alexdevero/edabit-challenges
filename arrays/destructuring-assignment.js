const [first, second, third, ...other] = [1, 2, 3, 4, 5, 6, 7, 8];

Test.assertSimilar(first, 1)
Test.assertSimilar(second, 2)
Test.assertSimilar(third, 3)
Test.assertSimilar(other, [4,5,6,7,8])
