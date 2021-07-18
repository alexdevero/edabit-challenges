def frames(minutes, fps):
	return minutes * (fps * 60)

frames(1, 1) # 60
frames(10, 1) # 600
frames(10, 25) # 15000
frames(500, 60) # 1800000
frames(0, 60) # 0
frames(99, 1) # 5940
frames(419, 70) # 1759800
frames(52, 33) # 102960