function calculateLosses(obj) {
	return Object.values(obj).length > 0 ? Object.values(obj).reduce((acc, curVal) => acc + curVal, 0) : 'Lucky you!'
}

calculateLosses({
  tv: 30,
  skate: 20,
  stereo: 50,
}) // 100

calculateLosses({
  ring: 30000,
  painting: 20000,
  bust: 1,
}) // 50001

calculateLosses({
  chair: 3500,
}) // 3500

calculateLosses({}) // "Lucky you!"
