function sumPolygon(n) {
	return (n - 2) * 180
}

Test.assertEquals(sumPolygon(3), 180)
Test.assertEquals(sumPolygon(4), 360)
Test.assertEquals(sumPolygon(5), 540)
Test.assertEquals(sumPolygon(6), 720)
Test.assertEquals(sumPolygon(7), 900)
Test.assertEquals(sumPolygon(8), 1080)
Test.assertEquals(sumPolygon(9), 1260)
Test.assertEquals(sumPolygon(10), 1440)
Test.assertEquals(sumPolygon(11), 1620)
Test.assertEquals(sumPolygon(12), 1800)
Test.assertEquals(sumPolygon(13), 1980)
Test.assertEquals(sumPolygon(14), 2160)
Test.assertEquals(sumPolygon(15), 2340)
Test.assertEquals(sumPolygon(16), 2520)
