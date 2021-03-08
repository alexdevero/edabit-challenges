function perfectRoots(n){
  return [Math.pow(n, 1/2), Math.pow(n, 1/4), Math.pow(n, 1/8)].every(num => Number.isInteger(num))
}

perfectRoots(256) // true
perfectRoots(1000) // false
perfectRoots(6561) // true
perfectRoots(12534) // false
perfectRoots(3455) // false
perfectRoots(65536) // true
perfectRoots(390625) // true
perfectRoots(1679616) // true
perfectRoots(6534561) // false
perfectRoots(253456) // false
perfectRoots(5764801) // true
perfectRoots(100000000) // true
