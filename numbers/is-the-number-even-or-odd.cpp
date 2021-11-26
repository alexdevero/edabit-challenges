std::string isEvenOrOdd(int num) {
	return num % 2 == 0 ? "even" : "odd";
}

Describe(is_even_or_odd)
{
  It(test1){Assert::That(isEvenOrOdd(3), Equals("odd"));}
  It(test2){Assert::That(isEvenOrOdd(0), Equals("even"));}
  It(test3){Assert::That(isEvenOrOdd(7), Equals("odd"));}
  It(test4){Assert::That(isEvenOrOdd(12), Equals("even"));}
  It(test5){Assert::That(isEvenOrOdd(6474), Equals("even"));}
  It(test6){Assert::That(isEvenOrOdd(0563), Equals("odd"));}
  It(test7){Assert::That(isEvenOrOdd(3), Equals("odd"));}
  It(test8){Assert::That(isEvenOrOdd(0000001111100000), Equals("even"));}
  It(test9){Assert::That(isEvenOrOdd(301), Equals("odd"));}
  It(test10){Assert::That(isEvenOrOdd(-3), Equals("odd"));}
  It(test11){Assert::That(isEvenOrOdd(-0), Equals("even"));}
  It(test12){Assert::That(isEvenOrOdd(-7), Equals("odd"));}It(test13){Assert::That(isEvenOrOdd(-12), Equals("even"));}  
  It(test14){Assert::That(isEvenOrOdd(-6474), Equals("even"));}  
  It(test15){Assert::That(isEvenOrOdd(-0563), Equals("odd"));}
  It(test16){Assert::That(isEvenOrOdd(-3), Equals("odd"));}
  It(test17){Assert::That(isEvenOrOdd(-0000001111100000), Equals("even"));}
  It(test18){Assert::That(isEvenOrOdd(-301), Equals("odd"));}
};