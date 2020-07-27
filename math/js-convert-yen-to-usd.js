function yenToUsd(yen){
	return +(yen / 107.5).toFixed(2)
}

yenToUsd(1) // 0.01
yenToUsd(500) // 4.65
yenToUsd(649) // 6.04
yenToUsd(1000) // 9.3
