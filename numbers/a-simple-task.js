function decimalPart(n) {
	return Math.abs(n % 1)
}

describe('partDecimal', function() {
  const advancedEquals = function(actual, expected, msg){
    const inRange = Math.abs((actual - expected)) <= 1e-7

    Test.expect(inRange, msg || 'Expected value near ' + expected.toExponential(13) + ', but got ' + actual.toExponential(13))
  }

  it('returns decimal part from 10 as 0', function() {
    advancedEquals(decimalPart(10), 0)
  })

  it('returns decimal part from -1.2 as 0.2', function() {
    advancedEquals(decimalPart(-1.2), 0.2)
  })

  it('returns decimal part from 4.5 as 0.5', function() {
    advancedEquals(decimalPart(4.5), 0.5)
  })

  it('returns decimal part', function() {
    advancedEquals(decimalPart(85824.5254243), 0.5254243)
  })

  it('returns decimal part', function() {
    advancedEquals(decimalPart(122.111111111), 0.111111111)
  })

  it('returns decimal part', function() {
    advancedEquals(decimalPart(-12.315346346), 0.315346346)
  })

  it('returns decimal part', function() {
    advancedEquals(decimalPart(5.01231), 0.01231)
  })
})
