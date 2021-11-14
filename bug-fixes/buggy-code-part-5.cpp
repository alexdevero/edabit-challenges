std::vector<int> printArray(int n){
  std::vector<int> newArray;
  
  for(int i = 1; i <= n; i++){
    newArray.push_back(i);
  }
  
  return newArray;
}

Describe(printArray_){
It(test1){Assert::That(printArray(1), Equals(std::vector<int>{1}));}
It(test2){Assert::That(printArray(2), Equals(std::vector<int>{1,2}));}
It(test3){Assert::That(printArray(3), Equals(std::vector<int>{1,2,3}));}
It(test4){Assert::That(printArray(4), Equals(std::vector<int>{1,2,3,4}));}
It(test5){Assert::That(printArray(5), Equals(std::vector<int>{1,2,3,4,5}));}
It(test6){Assert::That(printArray(6), Equals(std::vector<int>{1,2,3,4,5,6}));}
It(test7){Assert::That(printArray(7), Equals(std::vector<int>{1,2,3,4,5,6,7}));}
It(test8){Assert::That(printArray(8), Equals(std::vector<int>{1,2,3,4,5,6,7,8}));}
It(test9){Assert::That(printArray(9), Equals(std::vector<int>{1,2,3,4,5,6,7,8,9}));}
It(test10){Assert::That(printArray(10), Equals(std::vector<int>{1,2,3,4,5,6,7,8,9,10}));}
};
//Mubashir