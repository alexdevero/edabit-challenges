function greaterThanOne(frac) {
	return (parseInt(frac.split('/')[0]) / parseInt(frac.split('/')[1])) > 1
}

Test.assertEquals(greaterThanOne("1/2"), false)
Test.assertEquals(greaterThanOne("7/4"), true)
Test.assertEquals(greaterThanOne("10/10"), false)
Test.assertEquals(greaterThanOne("12/30"), false)
Test.assertEquals(greaterThanOne("28/3"), true)
Test.assertEquals(greaterThanOne("35/31"), true)
Test.assertEquals(greaterThanOne("11/27"), false)
Test.assertEquals(greaterThanOne("42/32"), true)
Test.assertEquals(greaterThanOne("34/15"), true)
Test.assertEquals(greaterThanOne("16/16"), false)
Test.assertEquals(greaterThanOne("38/41"), false)
Test.assertEquals(greaterThanOne("45/43"), true)
Test.assertEquals(greaterThanOne("13/38"), false)
Test.assertEquals(greaterThanOne("43/2"), true)
Test.assertEquals(greaterThanOne("16/31"), false)
Test.assertEquals(greaterThanOne("41/15"), true)
Test.assertEquals(greaterThanOne("2/38"), false)
Test.assertEquals(greaterThanOne("37/21"), true)
