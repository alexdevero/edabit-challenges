function removeLeadingTrailing(n) {
	return parseFloat(n).toString()
}

removeLeadingTrailing("230.000") // "230"
removeLeadingTrailing("00402") // "402"
removeLeadingTrailing("03.1400") // "3.14"
removeLeadingTrailing("30") // "30"
removeLeadingTrailing("30.0000") // "30"
removeLeadingTrailing("24340") // "24340"
removeLeadingTrailing("0404040") // "404040"
removeLeadingTrailing("0") // "0"
removeLeadingTrailing("00") // "0"
removeLeadingTrailing("0.000000") // "0"
removeLeadingTrailing("0000.000") // "0"
removeLeadingTrailing("00.0001") // "0.0001"
removeLeadingTrailing("10000") // "10000"
removeLeadingTrailing("1345") // "1345"
removeLeadingTrailing("30.000020") // "30.00002"
removeLeadingTrailing("00200.1900001") // "200.1900001"
