#include<iostream>

bool isSameNum(int num1, int num2) {
	return num1 == num2;
}

Describe(pair_management)
{
	It(test1){Assert::That(isSameNum(4,8), Equals(false));}
	It(test2){Assert::That(isSameNum(2,2), Equals(true));}
	It(test3){Assert::That(isSameNum(0,8), Equals(false));}
	It(test4){Assert::That(isSameNum(1,1), Equals(true));}
	It(test5){Assert::That(isSameNum(12,3), Equals(false));}
	It(test6){Assert::That(isSameNum(5,98), Equals(false));}
};