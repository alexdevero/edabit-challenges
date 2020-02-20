function frames(minutes, fps) {
	return minutes * 60 * fps
}

Test.assertEquals(frames(1, 1), 60)
Test.assertEquals(frames(10, 1), 600)
Test.assertEquals(frames(10, 25), 15000)
Test.assertEquals(frames(500, 60), 1800000)
Test.assertEquals(frames(0, 60), 0)
Test.assertEquals(frames(99, 1), 5940)
Test.assertEquals(frames(419, 70), 1759800)
Test.assertEquals(frames(52, 33), 102960)
