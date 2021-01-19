// create your arrow function below
const arrowFunc = (par) => par

if(!(String(arrowFunc).includes('=>'))){
	Test.assertEquals(0,1,"Your code does not use an arrow function")
}

Test.assertEquals(arrowFunc(3),3)
Test.assertEquals(arrowFunc("3"),"3")
Test.assertEquals(arrowFunc(true),true)
Test.assertEquals(arrowFunc("test"),"test")
