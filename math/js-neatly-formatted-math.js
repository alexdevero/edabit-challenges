function formatMath(expr) {
	return `${expr.split(' ')[0]} ${expr.split(' ')[1]} ${expr.split(' ')[2]} = ${eval(expr.replace('x', '*'))}`
}

// or
const formatMath = (expr) => {
  return `${expr} = ${eval(expr.replace(/x/g, '*'))}`
}

formatMath("3 + 4") // "3 + 4 = 7"
formatMath("3 - 2") // "3 - 2 = 1"
formatMath("4 x 5") // "4 x 5 = 20"
formatMath("6 / 3") // "6 / 3 = 2"
formatMath("9 / 3") // "9 / 3 = 3"
formatMath("21 / 3") // "21 / 3 = 7"
formatMath("24 / 3") // "24 / 3 = 8"
formatMath("80 / 8") // "80 / 8 = 10"
formatMath("60 / 30") // "60 / 30 = 2"
formatMath("44 - 11") // "44 - 11 = 33"
formatMath("48 + 35") // "48 + 35 = 83"
formatMath("8 + 5") // "8 + 5 = 13"
formatMath("46 - 11") // "46 - 11 = 35"
formatMath("23 x 46") // "23 x 46 = 1058"
formatMath("11 + 1") // "11 + 1 = 12"
formatMath("29 - 21") // "29 - 21 = 8"
formatMath("24 x 26") // "24 x 26 = 624"
formatMath("47 + 8") // "47 + 8 = 55"
formatMath("42 - 48") // "42 - 48 = -6"
formatMath("33 x 44") // "33 x 44 = 1452"
formatMath("26 + 3") // "26 + 3 = 29"
formatMath("32 + 17") // "32 + 17 = 49"
formatMath("3 x 26") // "3 x 26 = 78"
formatMath("12 x 25") // "12 x 25 = 300"
formatMath("43 + 31") // "43 + 31 = 74"
formatMath("28 + 27") // "28 + 27 = 55"
formatMath("24 - 11") // "24 - 11 = 13"
formatMath("20 x 50") // "20 x 50 = 1000"
formatMath("36 - 30") // "36 - 30 = 6"
formatMath("34 x 48") // "34 x 48 = 1632"
formatMath("26 + 8") // "26 + 8 = 34"
formatMath("25 - 44") // "25 - 44 = -19"
formatMath("24 x 25") // "24 x 25 = 600"
formatMath("40 x 17") // "40 x 17 = 680"
formatMath("44 - 7") // "44 - 7 = 37"
formatMath("37 x 41") // "37 x 41 = 1517"
formatMath("15 - 1") // "15 - 1 = 14"
formatMath("16 x 4") // "16 x 4 = 64"
formatMath("13 x 43") // "13 x 43 = 559"
formatMath("7 x 11") // "7 x 11 = 77"
formatMath("12 - 25") // "12 - 25 = -13"
formatMath("37 + 6") // "37 + 6 = 43"
formatMath("32 x 46") // "32 x 46 = 1472"
formatMath("31 x 5") // "31 x 5 = 155"
formatMath("17 - 37") // "17 - 37 = -20"
formatMath("31 + 36") // "31 + 36 = 67"
formatMath("17 x 34") // "17 x 34 = 578"
formatMath("24 - 3") // "24 - 3 = 21"
formatMath("48 + 33") // "48 + 33 = 81"
formatMath("19 + 1") // "19 + 1 = 20"
formatMath("45 + 1") // "45 + 1 = 46"
formatMath("34 + 24") // "34 + 24 = 58"
formatMath("32 + 41") // "32 + 41 = 73"
formatMath("1 - 21") // "1 - 21 = -20"
formatMath("40 x 8") // "40 x 8 = 320"
formatMath("4 - 16") // "4 - 16 = -12"
formatMath("30 - 43") // "30 - 43 = -13"
formatMath("26 + 49") // "26 + 49 = 75"
formatMath("24 x 38") // "24 x 38 = 912"
