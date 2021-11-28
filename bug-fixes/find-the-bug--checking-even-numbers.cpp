#include <algorithm> 
bool checkAllEven(std::vector<int> v) {
   return (std::all_of(v.cbegin(), v.cend(), [](int i){ return i % 2 == 0; }));
}

Describe(checkAllEven_){
It(test1){Assert::That(checkAllEven({1, 2, 3, 4}), Equals(false));}
It(test2){Assert::That(checkAllEven({2, 4, 6}), Equals(true));}
It(test3){Assert::That(checkAllEven({5, 6, 8, 10}), Equals(false));}
It(test4){Assert::That(checkAllEven({-2, 2, -2, 2}), Equals(true));}
};