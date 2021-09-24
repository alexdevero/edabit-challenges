bool returnTrue() {
	return true;
}

Describe(return_true)
{
  It(test1)
  {
      Assert::That(returnTrue(), Equals(true));
  }
};