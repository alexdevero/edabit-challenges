int triArea(int base, int height) {
	return (base * height) / 2;
}

Describe(area_of_triangle)
{
	It(test1){Assert::That(triArea(3, 2), Equals(3));}
	It(test2){Assert::That(triArea(5, 4), Equals(10));}
	It(test3){Assert::That(triArea(10, 10), Equals(50));}
	It(test4){Assert::That(triArea(0, 60), Equals(0));}
	It(test5){Assert::That(triArea(12, 11), Equals(66));}
};
area of a triangle