int nextEdge(int side1, int side2) {
	return (side1 + side2) - 1;
}

Describe(maximum_edge_of_triangle)
{
  It(test1){Assert::That(nextEdge(5, 4), Equals(8));}
	It(test2){Assert::That(nextEdge(8, 3), Equals(10));}
	It(test3){Assert::That(nextEdge(7, 9), Equals(15));}
	It(test4){Assert::That(nextEdge(10, 4), Equals(13));}
	It(test5){Assert::That(nextEdge(7, 2), Equals(8));}
};