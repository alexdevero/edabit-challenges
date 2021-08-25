# create your lambda function below
lambda_func = lambda x: x

if('<function lambda_func at' in str(lambda_func)):
	Test.assert_equals(0,1,"Your code does not use an lambda function")

Test.assert_equals(lambda_func(3),3)
Test.assert_equals(lambda_func("3"),"3")
Test.assert_equals(lambda_func(True),True)
Test.assert_equals(lambda_func("test"),"test")