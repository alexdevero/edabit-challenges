int howManyStickers(int n) {
	return n * (n * 6);
}

Describe(howManyStickers_){
It(test1){Assert::That(howManyStickers(1), Equals(6));}
It(test2){Assert::That(howManyStickers(2), Equals(24));}
It(test3){Assert::That(howManyStickers(3), Equals(54));}
It(test4){Assert::That(howManyStickers(4), Equals(96));}
It(test5){Assert::That(howManyStickers(5), Equals(150));}
It(test6){Assert::That(howManyStickers(6), Equals(216));}
It(test7){Assert::That(howManyStickers(7), Equals(294));}
It(test8){Assert::That(howManyStickers(8), Equals(384));}
It(test9){Assert::That(howManyStickers(9), Equals(486));}
It(test10){Assert::That(howManyStickers(10), Equals(600));}
It(test11){Assert::That(howManyStickers(11), Equals(726));}
It(test12){Assert::That(howManyStickers(12), Equals(864));}
It(test13){Assert::That(howManyStickers(13), Equals(1014));}
It(test14){Assert::That(howManyStickers(14), Equals(1176));}
It(test15){Assert::That(howManyStickers(15), Equals(1350));}
};