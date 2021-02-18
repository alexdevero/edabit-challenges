function areaofhexagon(x){
  return x <= 0 ? null : +((3 / 2) * Math.sqrt(3) * (Math.pow(x, 2))).toFixed(1)
}

areaofhexagon(1) // 2.6
areaofhexagon(2) // 10.4
areaofhexagon(3) // 23.4
areaofhexagon(4) // 41.6
areaofhexagon(5) // 65
areaofhexagon(0) // null
areaofhexagon(-1) // null
