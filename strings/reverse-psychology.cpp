std::string reversePsychology(std::string s="do anything") {
	return "Do not " + s + ".";
}

Describe(reversePsychology_) {
	It(test1){Assert::That(reversePsychology("wash the dishes"), Equals("Do not wash the dishes."));}
	It(test2){Assert::That(reversePsychology("eat your lunch"), Equals("Do not eat your lunch."));}
	It(test3){Assert::That(reversePsychology("go to school"), Equals("Do not go to school."));}
	It(test4){Assert::That(reversePsychology(), Equals("Do not do anything."));}
	It(test5){Assert::That(reversePsychology("read"), Equals("Do not read."));}
	It(test6){Assert::That(reversePsychology("learn Python"), Equals("Do not learn Python."));}
	It(test7){Assert::That(reversePsychology("exercise"), Equals("Do not exercise."));}
	It(test8){Assert::That(reversePsychology("buy PC parts"), Equals("Do not buy PC parts."));}
	It(test9){Assert::That(reversePsychology("do your homework"), Equals("Do not do your homework."));}
	It(test10){Assert::That(reversePsychology("drink water"), Equals("Do not drink water."));}
	It(test11){Assert::That(reversePsychology("look around"), Equals("Do not look around."));}
};