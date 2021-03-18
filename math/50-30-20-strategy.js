function fiftyThirtyTwenty(ati) {
	return {
		Needs: ati / 10 * 5,
		Wants: ati / 10 * 3,
		Savings: ati / 10 * 2
	}
}

fiftyThirtyTwenty(10000) // { "Needs": 5000, "Wants": 3000, "Savings": 2000 }
fiftyThirtyTwenty(50000) // { "Needs": 25000, "Wants": 15000, "Savings": 10000 }
fiftyThirtyTwenty(13450) // { "Needs": 6725, "Wants": 4035, "Savings": 2690 }
fiftyThirtyTwenty(27800) // { "Needs": 13900, "Wants": 8340, "Savings": 5560 }
fiftyThirtyTwenty(19000) // { "Needs": 9500, "Wants": 5700, "Savings": 3800 }
fiftyThirtyTwenty(17610) // { "Needs": 8805, "Wants": 5283, "Savings": 3522 }
fiftyThirtyTwenty(25000) // { "Needs": 12500, "Wants": 7500, "Savings": 5000 }
fiftyThirtyTwenty(100000) // { "Needs": 50000, "Wants": 30000, "Savings": 20000 }
fiftyThirtyTwenty(347100) // { "Needs": 173550, "Wants": 104130, "Savings": 69420 }
