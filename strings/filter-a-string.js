function filterString(txt){
  return [/[A-Z]/, /[a-z]/, /\d/, /[\W]/].map(r => txt.split(r).length - 1)
}

filterString("*$(#Mu12bas43hiR%@*!") // [2, 6, 4, 8]
filterString("^^Edabit^^%$#12379") // [1, 5, 5, 7]
filterString("123PakisTan#$%") // [2, 6, 3, 3]
filterString("**Airforce1**") // [1, 7, 1, 4]
filterString("bgA5<1d-tOwUZTS8yQ") // [7, 6, 3, 2]
filterString("P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H") // [9, 9, 6, 9]
filterString("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD") // [15, 8, 6, 9]
filterString("$Cnl)Sr<7bBW-&qLHI!mY41ODe") // [10, 7, 3, 6]
filterString("@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft") // [7, 13, 4, 10]
