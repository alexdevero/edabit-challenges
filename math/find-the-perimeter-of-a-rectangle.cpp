int findPerimeter(int length, int width) {
	return length * 2 + width * 2;
}

Describe(find_perimeter)
{
  It(test1){Assert::That(findPerimeter(6, 7), Equals(26));}
  It(test2){Assert::That(findPerimeter(20, 10), Equals(60));}
  It(test3){Assert::That(findPerimeter(2, 9), Equals(22));}
};