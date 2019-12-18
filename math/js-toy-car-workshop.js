function cars(wheels, bodies, figures) {
	return Math.floor(wheels / 4) < Math.floor(figures / 2) && Math.floor(wheels / 4) < bodies ? Math.floor(wheels / 4) : Math.floor(figures / 2) < Math.floor(wheels / 4) && Math.floor(figures / 2) < bodies ? Math.floor(figures / 2) : bodies
}

cars(37, 15, 20) // 9
cars(72, 7, 21) // 7
cars(9, 44, 34) // 2
cars(50, 38, 7) // 3
cars(68, 9, 44) // 9
cars(3, 29, 54) // 0
cars(28, 34, 80) // 7
cars(88, 50, 83) // 22
cars(66, 18, 21) // 10
cars(97, 6, 10) // 5
cars(921, 310, 350) // 175
cars(736, 430, 851) // 184
cars(405, 379, 740) // 101
cars(593, 78, 389) // 78
cars(875, 370, 675) // 218
cars(863, 274, 203) // 101
cars(959, 331, 537) // 239
cars(416, 340, 551) // 104
cars(692, 348, 543) // 173
cars(527, 412, 951) // 131
