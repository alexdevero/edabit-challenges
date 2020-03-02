function pHName(pH) {
	return (pH < 0 || pH > 14) ? 'invalid' : pH === 7 ? 'neutral' : (pH > 0 && pH < 7) ? 'acidic' : 'alkaline'
}

pHName(7.0) // 'neutral')
pHName(7) // 'neutral')
pHName(13.52) // 'alkaline')
pHName(-4.33) // 'invalid')
pHName(8.27) // 'alkaline')
pHName(9.72) // 'alkaline')
pHName(-4.58) // 'invalid')
pHName(14.85) // 'invalid')
pHName(17.76) // 'invalid')
pHName(3.9) // 'acidic')
pHName(14.21) // 'invalid')
pHName(-2.35) // 'invalid')
pHName(2.66) // 'acidic')
pHName(16.45) // 'invalid')
pHName(3.46) // 'acidic')
pHName(7.26) // 'alkaline')
pHName(12.46) // 'alkaline')
pHName(17.51) // 'invalid')
pHName(19.7) // 'invalid')
pHName(10.46) // 'alkaline')
pHName(-4.83) // 'invalid')
pHName(3.13) // 'acidic')
pHName(11.38) // 'alkaline')
pHName(5.23) // 'acidic')
pHName(18.85) // 'invalid')
pHName(15.82) // 'invalid')
pHName(9.17) // 'alkaline')
pHName(2.73) // 'acidic')
pHName(10.99) // 'alkaline')
pHName(-3.86) // 'invalid')
pHName(17.59) // 'invalid')
pHName(5.5) // 'acidic')
pHName(-3.35) // 'invalid')
pHName(16.02) // 'invalid')
pHName(8.78) // 'alkaline')
pHName(18.94) // 'invalid')
pHName(-4.69) // 'invalid')
pHName(0.86) // 'acidic')
pHName(-3.45) // 'invalid')
pHName(19.05) // 'invalid')
pHName(5.41) // 'acidic')
pHName(0.44) // 'acidic')
pHName(8.82) // 'alkaline')
pHName(-1.24) // 'invalid')
pHName(1.72) // 'acidic')
pHName(10.01) // 'alkaline')
pHName(3.49) // 'acidic')
pHName(13.62) // 'alkaline')
pHName(3.43) // 'acidic')
pHName(4.35) // 'acidic')
pHName(17.07) // 'invalid')
pHName(14.64) // 'invalid')