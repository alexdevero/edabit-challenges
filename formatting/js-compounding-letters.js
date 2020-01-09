function accum(str) {
	return str.split('').map((l, i) => l.toUpperCase() + l.toLowerCase().repeat(i)).join('-')
}

accum("abcd") // "A-Bb-Ccc-Dddd")
accum("RqaEzty") // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy")
accum("cwAt") // "C-Ww-Aaa-Tttt")
accum("VgyCdnQa") // "V-Gg-Yyy-Cccc-Ddddd-Nnnnnn-Qqqqqqq-Aaaaaaaa")
accum("nRBSdNOsMl") // "N-Rr-Bbb-Ssss-Ddddd-Nnnnnn-Ooooooo-Ssssssss-Mmmmmmmmm-Llllllllll")
accum("nuE") // "N-Uu-Eee")
accum("RlDrhZuQaqsoHEfziByObtMxkFCJVe") // "R-Ll-Ddd-Rrrr-Hhhhh-Zzzzzz-Uuuuuuu-Qqqqqqqq-Aaaaaaaaa-Qqqqqqqqqq-Sssssssssss-Oooooooooooo-Hhhhhhhhhhhhh-Eeeeeeeeeeeeee-Fffffffffffffff-Zzzzzzzzzzzzzzzz-Iiiiiiiiiiiiiiiii-Bbbbbbbbbbbbbbbbbb-Yyyyyyyyyyyyyyyyyyy-Oooooooooooooooooooo-Bbbbbbbbbbbbbbbbbbbbb-Tttttttttttttttttttttt-Mmmmmmmmmmmmmmmmmmmmmmm-Xxxxxxxxxxxxxxxxxxxxxxxx-Kkkkkkkkkkkkkkkkkkkkkkkkk-Ffffffffffffffffffffffffff-Ccccccccccccccccccccccccccc-Jjjjjjjjjjjjjjjjjjjjjjjjjjjj-Vvvvvvvvvvvvvvvvvvvvvvvvvvvvv-Eeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
accum("EXpzPFx") // "E-Xx-Ppp-Zzzz-Ppppp-Ffffff-Xxxxxxx")
accum("NU") // "N-Uu")
accum("g") // "G")
