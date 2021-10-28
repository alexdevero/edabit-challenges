int frames(int minutes, int fps) {
	return minutes * fps * 60;
}

Describe(tests)
{
	It(test1){Assert::That(frames(1, 1), Equals(60));}
	It(test2){Assert::That(frames(10, 1), Equals(600));}
	It(test3){Assert::That(frames(10, 25), Equals(15000));}
	It(test4){Assert::That(frames(500, 60), Equals(1800000));}
	It(test5){Assert::That(frames(0, 60), Equals(0));}
	It(test6){Assert::That(frames(99, 1), Equals(5940));}
	It(test7){Assert::That(frames(419, 70), Equals(1759800));}
	It(test8){Assert::That(frames(52, 33), Equals(102960));}
};