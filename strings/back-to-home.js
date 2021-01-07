function backToHome(d){
  return (d.match(/N/g) || []).length === (d.match(/S/g) || []).length && d.match((/E/g) || []).length === (d.match(/W/g) || []).length
}

backToHome("NNNN") // false
backToHome("NENESSWW") // true
backToHome("NEESSW") // false
backToHome("EEWE") // false
backToHome("NNSSEEEWWWEW") // true
