function countClaps(str) {
	return str.split('C').length - 1
}

countClaps("ClaClaClaClap!") // 4)
countClaps("ClClClaClaClaClap!") // 6)
countClaps("CCClaClClap!Clap!ClClClap!") // 9)
countClaps("ClCCClaClaClaClCClap!CClaClap!Clap!ClClClClaClaClap!Clap!ClClCClap!Clap!ClClap!ClaCClClap!ClClap!Clap!CClClaClaClaCClaCClaClClaCCCClaClap!Clap!ClaClaClap!ClaClap!CClap!Clap!ClClap!") // 61)
countClaps("Clap!ClClaClap!ClaClap!CClap!ClClClap!CClaClap!CClap!ClClap!ClaClaClClap!ClaClap!ClClCClaClaCClaCCCCClClCClap!ClaCClaClCClap!Clap!ClaClaClaCClaClap!") // 52)
countClaps("Clap!CClaClClap!ClCClCCClaCClap!ClCCClCClClap!ClClClap!CClap!CClCClap!ClCClap!Clap!Clap!Clap!ClClap!Clap!CClaClClap!ClaClaClaClCClClaClClap!ClaClClaClap!ClaClap!CClClClap!ClClaClClap!Clap!ClaClaClaClaClClap!CClaClClaCClap!ClClClClClap!Clap!CClClap!ClClap!ClaClap!CClClaClaClap!Clap!") // 97)
countClaps("CClCClaCClap!Clap!ClaClap!ClCCClap!ClClClClap!ClaClCClClaClap!") // 23)
countClaps("Clap!Clap!ClClCClCClClaClaClaCClaClClaClClClClap!CClap!ClClap!ClClClaClaClClaClaClaClaCClClaClap!") // 36)
countClaps("ClaCCClClCClClaCClCClap!ClaClClaClap!Clap!ClClClClap!Clap!CClap!CClaClClaClCClaClap!ClaClaClaClap!Clap!ClClap!CCClap!ClClaClap!CClClClap!CClaClaClClaClap!ClClap!ClaCClaClap!Clap!Clap!Clap!CClaCCCClap!ClaClap!ClClap!Clap!CClaClaClaClap!CClaCClap!Clap!CClaCClaClaCClaCClap!") // 94)
countClaps("CClClap!Clap!CClCClClaCClaClaClap!ClaClaClaCCCClap!CCClClap!Clap!ClaClaClap!ClClClap!ClCCClap!ClaClaClap!CClap!ClaClap!CClClClap!CClap!CClClaCClClap!ClaClap!ClaClClClCClap!ClaClClap!ClaClaCClap!CClClaClClap!ClaClaClClaClClaClaClap!") // 82)
countClaps("ClaCCClCClaClClaClCClaClaClap!Clap!CClaClap!ClaClap!Clap!ClaClap!Clap!") // 23)
countClaps("CClClaClClaClClap!Clap!Clap!ClClaClap!ClClClClaClap!CClap!ClaClaCCClap!ClClap!CClap!Clap!Clap!ClaClaClap!ClaClClClaClaClap!ClaClaClap!ClClCClaClaCClClaClap!Clap!Clap!CClClaClaClaClaClCClClaClaCClaClap!ClCClClClap!Clap!Clap!Clap!Clap!CClaClap!Clap!CCClaClCClClaClClClaClaClaClaCClap!Clap!") // 96)
countClaps("Clap!ClaClCClaClap!ClCClap!ClClClaClap!ClaClaCClap!ClaClaClap!ClaCClap!Clap!CClClClap!ClClCClaCClCClaCClClClClaClap!ClClaCClap!CCCClap!Clap!ClClap!ClaCClaCClClap!ClClaClap!ClClaClaClaClaCCClClap!CClaClaClap!Clap!ClClap!") // 78)
countClaps("Clap!ClaClCClaClaClap!CClaClap!CCClCClap!Clap!Clap!Clap!ClClap!Clap!ClaClaClClap!Clap!ClaClaClap!CClaClap!CCClClap!ClaClaClap!ClClaClaClaClaClap!CClap!ClaClCClaClap!CClClCClaClap!Clap!CClaCClap!") // 63)
countClaps("Clap!CClaClap!ClClap!ClClClap!ClaCClap!ClaCClClap!CClap!CClClaClap!ClaClaClCCClap!Clap!CClClaClCClaClaClClap!Clap!CClaCClaCClap!ClaCClClCClap!CClap!CClap!ClaClaClaClaClap!ClClap!CClaClaClaClClaClClCClClCClClaClaCClClap!") // 80)
countClaps("CClaCClClap!Clap!Clap!Clap!Clap!Clap!Clap!ClClClap!CClap!CClap!CCClaClClClClClaCClaClap!ClClap!CClaClap!Clap!CCClaClap!Clap!CClClClaClaClaClap!ClaCClap!ClClaClaCClClap!CClap!ClaClap!") // 60)
countClaps("ClaCCClap!") // 4)
countClaps("ClaClap!ClaClaClap!Clap!") // 6)
countClaps("CClap!ClaClaClClap!Clap!ClaCCClap!ClClaClap!CClap!CClap!ClaClClaCClaClap!ClaClap!ClaClClaClaCCClClaClaClap!Clap!") // 37)
countClaps("ClClaCClap!ClaCClaClap!Clap!Clap!ClaClClap!ClClaClaClClaClaClaCCClClClClClap!") // 27)
countClaps("ClClClCClClap!Clap!CCCClap!ClCCClClap!CCClap!Clap!Clap!CClap!ClaClaCClaCClaClaClaClClap!ClaClCCClClaClap!ClClaClaCClCCClClClap!Clap!ClaClap!ClaClaCClap!ClCCClaClap!ClaClap!CClap!CClaClClaClCClaClap!CClClap!ClClap!Clap!CClap!CClaClaClClaClap!") // 88)
countClaps("ClClCClClClaClClCClap!ClCClap!ClaClaClClap!ClaCClClap!ClClaClap!ClaClaClaClap!Clap!Clap!CCCClaClaClaClaClaCClCClaClaClap!Clap!CCCClap!ClaClap!CCClaClaClaClap!ClClClap!CClCCCClap!Clap!CClClClaClap!ClClaCClClap!ClaClClap!ClaClap!ClCClaClaCClap!") // 88)
countClaps("ClClap!Clap!CCClClClaClClClClap!Clap!CClap!ClClap!ClClaCCClap!") // 22)
countClaps("ClaClaClClClaCClap!ClaClaCCClaClaClClap!CClCClCClClClClap!ClaClap!Clap!ClaCCClap!ClCCClaClClClaCCClaClCClClaClap!ClClaClClaClap!ClClap!Clap!ClaClaClClap!") // 58)
countClaps("ClaCClClClClaClClap!ClClap!CCClaCCClClCCClaClap!Clap!CClClClap!ClaCClClaCClaCClClap!ClClClClaCClaClap!Clap!") // 43)
countClaps("ClaClCClClCClCClaCCClap!ClaClaCClap!ClaClap!CClaClaClClaCClClaClaClCCClaClap!ClClap!Clap!Clap!ClaCCClap!ClClaClaClap!ClaClap!CCClap!CClap!CClClap!") // 54)
countClaps("Clap!ClaCCCCCClClaCCCClaClaClClap!CClaCClaCClap!CClap!CClCClClap!CCCCClaClap!") // 35)
countClaps("ClClaClap!Clap!ClCClaClaCClaCClaClap!CCClaCClaClClap!Clap!ClCCCClaClaClap!Clap!ClaClap!ClaClClap!ClCClCClaClClap!CClaClap!ClClClaCClaCClap!Clap!ClCClCClap!ClaCCClClap!Clap!Clap!CClaClaClap!ClaCClaCClap!") // 73)
countClaps("CClaClClaClap!ClClClaCClaClaCClCClCClaClaCClaClap!CCCCClap!ClaCClClaClClap!ClClClap!ClCClaClCClClClap!CClap!ClaClClap!ClCClap!") // 51)
countClaps("ClaClaClaCClClap!ClaClap!Clap!ClCCCClaClap!Clap!CCClClClaClaCClClap!CClClaClClap!ClCCClaClClap!Clap!CClaCCCClClap!") // 44)
countClaps("CClClap!ClClCClaClClaClaClap!ClaCClClaClaClaClaClap!ClClaClap!Clap!CClap!CClaClClap!ClClap!CClaClClap!ClaCCClap!CCClaClaClClClaClaClClap!CCClClaClClClClap!ClClap!ClaClClClap!Clap!CClaClaClaCClap!Clap!Clap!ClaClClClap!CClaClaClaClaClaCClClClaClap!ClClap!ClClaCClaClaCClClap!Clap!") // 98)
countClaps("ClaCClaClap!CClap!ClClaClClaClaClaClCClaCClap!") // 17)
countClaps("ClaClClap!") // 3)
countClaps("ClClaClap!CClaCClClap!") // 8)
countClaps("ClCClaClaClap!Clap!ClaCCClap!CClCClaClClap!CClClap!ClClCCCCClaCClClClaClClCClaClap!Clap!") // 36)
countClaps("Clap!CClaCCCClClaClaClaClap!ClClaClClap!") // 15)
countClaps("CClap!ClCCCCClClaClap!ClClClap!CClap!ClaClaClaClCCClCCClaClClap!Clap!CClaClClCClap!ClaClClap!ClCClaClaClap!") // 42)
countClaps("Clap!ClaCClap!CCCCClaClap!ClClaCClClap!ClaClClap!ClaClClaClaClaClCCCClaClaCClap!Clap!ClaCCClap!ClClap!ClClap!ClClap!CClClClClap!Clap!CClaCClClClap!ClaCClClaCCClClap!CCClap!") // 65)
countClaps("Clap!ClCClClap!CCClap!ClClap!ClClaClaClap!ClCClClClaClClap!ClCClap!Clap!Clap!ClCClap!ClCCClCClap!Clap!ClClCClCClap!ClCClaClaClCClap!") // 49)
countClaps("ClCClap!ClaClap!CCClClCCClaClClCClaClClap!CClap!CClaClCClClap!ClClap!") // 28)
countClaps("Clap!ClaClaCClap!") // 5)
countClaps("ClClap!ClClap!ClaCCClap!ClClCClaClaClCClap!Clap!Clap!ClClaCClClaClap!Clap!ClClClClap!ClCCCClaClClap!Clap!ClClClap!ClaCClap!CClaClap!Clap!ClClClaClClClClaClaClClaClaClClClaCCClap!ClaClap!Clap!ClClClap!Clap!Clap!") // 72)
countClaps("CClaCClCCClClClap!ClClaCCClap!Clap!Clap!ClClCClClClClaClaCClap!ClClClap!CClap!ClaClClaCCClClaClClap!CClCCCClaClaClCCClap!CClap!Clap!ClaClaClClaClClClaClaCClClap!Clap!CCClaClap!CClClaCClap!ClClClap!Clap!ClaClaClClClClap!Clap!ClaClap!") // 88)
countClaps("CClClaCClaClClClaClaClap!Clap!ClaClaCClClaClaCClCClap!") // 21)
countClaps("CClap!ClaClap!ClClap!CClaClClaClClap!CCClap!CClCCClap!CClap!Clap!ClClap!ClClap!Clap!ClClap!ClClClaClaCClaClaClCClap!ClaClap!CClap!ClaCClClap!Clap!Clap!Clap!ClClap!ClClClaCCClClap!ClaCCClaClCCClaClap!") // 69)
countClaps("CClClap!Clap!ClCCClaClClCClClap!ClClClaCCClClaClaCClap!ClClap!Clap!ClClaClClClaCClaClClClaClClClaCClaClCClap!ClCCClClCClap!CCClClap!CClaClClap!ClCClClaClaClaClap!Clap!CClClap!ClaCClaClClClCClap!ClaClClClaClaCClaClap!") // 86)
countClaps("Clap!Clap!ClClap!Clap!CClClaClaCClCClClap!ClClaCClClClCClaClClClaClClCClaCClClClap!ClaClap!ClClaClCCClaClaClaCCClaClap!") // 47)
countClaps("ClaClaClClClap!Clap!ClClClClap!") // 10)
countClaps("ClaClap!CClap!ClClClClap!CClaClClClap!CCClaClaClap!ClaClap!CClaCClClClaClap!ClClClClCClaCClap!ClClap!Clap!") // 38)
countClaps("CCClaClClClClap!Clap!ClCCClClClaClCClCCClClap!") // 21)
countClaps("ClClap!") // 2)
countClaps("Clap!CCClClClaClap!ClaCClClap!CClClaClClaClap!Clap!ClaClap!") // 20)
countClaps("ClaClap!CClaClaClap!CClClClap!ClCClap!Clap!Clap!") // 15)
countClaps("ClaCClap!ClClap!ClaCClClaClap!Clap!Clap!") // 12)
countClaps("ClClap!ClaClaCCClaClCClap!CClap!ClaClClaClap!CClClap!ClClap!ClaCClaCClaClaClCClaClaClaClClap!ClClap!CClaClap!Clap!CClap!ClCClap!ClaClaClap!ClaClap!ClClClCCClClaCCClaClClaClClClClaClClaClClap!ClaClap!CCClCClaCClClap!ClaClaClap!") // 83)
countClaps("ClCClCClap!Clap!ClaClaClap!ClaCClClClap!ClaClaClaClap!ClClaClap!ClCCCClaCCClaClap!CClap!ClClap!ClaClap!CCCCClaClap!Clap!") // 43)
countClaps("Clap!ClClClCClap!ClClap!ClClap!ClaClaClap!CClap!") // 15)
countClaps("ClaClClap!ClCClaCClap!ClClap!CClaClap!CClClaCClaClap!CClaClaClaCCCCClap!CClaClaClClaClClap!ClClap!ClCClap!Clap!ClClap!CClClaClClap!CClaCClap!CClClap!ClaCClap!Clap!ClaClap!Clap!Clap!ClaClClap!Clap!Clap!ClClaClaClap!CClaClCClap!ClClClClaClaCClaClClClClap!") // 88)
countClaps("ClClCClap!ClaClClaCCClaClaCClaClap!CClaClap!ClaCClClaClaClClap!ClaClaClClap!ClClCClaCClClap!") // 35)
countClaps("ClaClClClap!Clap!ClClaClClaClaCClClaClap!ClaClClClaClClaClClaClClClaClCClaClap!CCCClap!Clap!CClap!Clap!ClaClap!CClap!ClClap!CClClClaClap!ClClCClaClClap!ClaClClaClaClCClClClap!ClClaClap!Clap!ClaCClClClaCClap!Clap!ClClaClClClClaClClap!ClClap!") // 85)
countClaps("CClaClaClaClap!Clap!Clap!") // 7)
countClaps("Clap!ClClClaClaClCClap!") // 8)
countClaps("ClClap!Clap!Clap!CClCClap!Clap!Clap!CClClaCClap!ClaClap!Clap!ClClaClClCClap!") // 24)
countClaps("ClCClap!ClaClaClap!CClap!Clap!ClaClap!ClaClClap!Clap!ClClaClap!ClClClaClaClaClaClaClaClap!") // 27)
countClaps("CClap!ClaClClap!ClCClap!CClaCClClaClClap!CClap!CCCClClaClClap!CCClaClaClap!CCClap!Clap!Clap!Clap!ClClaCCCClaClClap!ClaClap!ClaClClaClap!Clap!ClaCClap!Clap!ClClClap!Clap!ClClaCClClaClap!Clap!Clap!ClCCClClap!Clap!ClCClCCClaClap!ClaCCClClClCCClClClaClaClap!Clap!ClaClaCClaClap!") // 98)
countClaps("Clap!ClClClaCClap!CClap!ClaCClaClCClap!Clap!CClaCClCCClClClap!ClaClaCCCClClaCClaClClap!CClCClClap!Clap!CCClaClaClClaClaClap!Clap!ClCClaClaClClClap!Clap!ClaClClap!ClClClap!ClaClap!CCClap!ClaClap!ClClap!Clap!ClaClap!ClClClap!Clap!Clap!ClaCCClap!CClap!ClClaCClaClaClap!ClaCClap!ClaClCCClap!") // 101)
countClaps("CCCCClClClap!ClaCClClClClaClClClaClClaClaClCCClap!ClClaCClap!CClap!Clap!ClaClap!Clap!Clap!") // 34)
countClaps("ClClap!ClCClap!CClaClap!ClCClaCCClap!ClClap!CClap!CCClaClap!Clap!CClaClap!Clap!ClaClaClap!ClaClClClClaClCCCClap!CClap!CClap!CClaClClClClaClaClClClCClCClap!ClaCCClClClCCClClap!CClClap!Clap!ClaCClap!ClaClaCClaClap!ClaClaClap!") // 83)
countClaps("Clap!Clap!Clap!ClClClCClClClap!Clap!Clap!ClClClClaClap!ClClClaClap!ClaClap!ClCClap!Clap!ClCClaCClClaClCCClClaCClCClCClaClap!Clap!CClaClap!ClClap!Clap!CCClap!CClaCClClClClap!ClClap!Clap!ClaClaClaCClap!ClClClap!Clap!Clap!") // 75)
countClaps("Clap!ClaCClaClClap!ClCClaClClClap!ClClap!Clap!Clap!CClap!ClaClCClaClCClap!Clap!ClaClaClaClaClaClClap!CClCCClaCClap!ClaCClClaCCClClap!CClClCClaClap!ClaClCClCClap!ClaClCClClClap!ClClaClap!ClClap!ClCClaClClaCClaClaClClCClap!Clap!CClap!") // 86)
countClaps("ClaCClap!ClClaCCClap!Clap!ClaClap!") // 11)
countClaps("Clap!ClaClap!ClaClap!ClCClaClap!Clap!CCClaClaClap!ClaClaClap!ClClaCClClaCClaClClap!ClClClap!ClCClClCClap!Clap!") // 37)
countClaps("ClClaClClaClaCClClap!ClaClaClaCClap!CCClClap!ClClaCClClaClaClaClap!ClaCCClaClaClap!ClaCClaClap!") // 35)
countClaps("ClClaClClap!ClClaClap!Clap!ClaClClClap!ClaClap!ClaCCClap!Clap!ClClap!ClClaCClClCClClClaClap!ClClClCClaClap!CClap!ClClClap!ClCCClap!Clap!CClClCClaCClCClaClClap!CClaCCClap!CCClaClClap!ClaClClap!Clap!ClaClClap!ClaClaClap!Clap!ClaClap!ClClCClaCClaClClap!") // 89)
countClaps("ClaClaClClap!ClaClCCClaClaCClap!CClCClap!Clap!") // 17)
countClaps("CCClaCClap!ClClaClaClaClaClaClaCClaClap!Clap!CClClap!CClClaClap!Clap!ClClClaClaCClaCClaClClap!ClClClap!CClaClaClaClap!Clap!ClClap!Clap!ClaCClClClap!ClaClaClap!CCClClap!Clap!ClCCClClaClClCClap!ClaClap!") // 70)
countClaps("ClCClaClap!ClClClClap!ClaClaCClaClClClap!CClCClCClClap!CClCClClClClaClCClap!CClaCCCCCClClap!ClaClaClaClClaClaClClaCClClap!Clap!CCClaClClaClap!ClCClap!CClClap!Clap!ClaClClap!CClaClaClap!CClClaClap!Clap!") // 78)
countClaps("Clap!ClaClClCClaClCClaClClaClap!Clap!") // 13)
countClaps("CClClap!Clap!CClaClap!ClaClap!ClCCClaClClap!ClaCClClaCClap!ClaClClClap!CClap!Clap!") // 28)
countClaps("ClClaClap!CCClClClaCCClCClClap!ClaClCClaClClap!ClaClap!ClClaCClClaClaClaCClClaClap!ClClaClap!Clap!CCClClaClap!Clap!CClClClClClaClClCClClaCClap!Clap!ClaClaClCClap!Clap!ClaClaClClap!CClaCClaCClaClClaClap!CClap!ClCClap!CClCClaClaClClaClaClap!Clap!Clap!ClClaClap!Clap!") // 96)
countClaps("ClaClap!ClaClCClClClClap!Clap!CClaClap!Clap!CCClaClaCClaCCCCClaClaClaCClClClaClap!ClClap!CClaCClClClap!ClaClCCCClap!ClClClaClClaClClap!") // 53)
countClaps("ClClap!CClap!Clap!CClaCClClaCClClCClap!") // 15)
countClaps("CClCClap!ClClap!ClCClaClap!Clap!CClaClaClaClClClap!") // 18)
countClaps("ClaClCClaCClaClaClClaClClaClap!ClaCCClClaClap!Clap!CClap!ClCClap!CClClClap!ClClap!CClClap!") // 33)
countClaps("ClaClap!ClClClap!ClClaClaCCCClaClClap!Clap!ClaClaClap!ClClap!Clap!CClap!Clap!CClClClap!ClaClCClap!Clap!ClClap!ClaCClap!Clap!") // 39)
countClaps("ClClap!CCClap!ClClaClaCClCCClap!ClCCCClaClClaClap!ClClClaClClClaCCClaClap!Clap!Clap!ClCClaClaClap!ClaClCCClClClaClClClap!Clap!Clap!ClaCClap!ClClCClaClap!Clap!CClaClap!Clap!") // 63)
countClaps("ClaClClCClClClap!ClaClaClap!Clap!ClClap!ClCClap!ClClap!ClaClap!ClaCClaClap!CClaClap!ClaClClaClaClap!ClClaClap!ClaCClap!CClClaCClap!Clap!CCClClCCCClClClClaCClClap!") // 58)
countClaps("ClaClap!ClaClClap!ClCClClClaCClap!ClCClaClaClaClaClaCClap!ClClap!Clap!ClClaClCClap!ClaCClaClap!Clap!Clap!CClaCClClap!Clap!CClaClap!ClClClClaClap!ClaClap!") // 51)
countClaps("ClCClCClCClClap!ClaClap!ClClaCCClCClaClaClap!CCClaClClap!ClClap!ClaClap!CClap!Clap!ClaClClaClap!Clap!ClClCClaClClClaClaClaClap!") // 46)
countClaps("CClClClap!CCClap!CClap!Clap!CClClap!CCClaClClaCClap!ClaCClClCClap!Clap!CClap!ClaCClaClaClaClap!") // 35)
countClaps("ClaCClaClap!CClCCClap!ClClap!CClap!Clap!ClCClCCCClCClap!ClaClClCCClaClap!") // 30)
countClaps("CClaClClap!CClClClap!ClaClap!CClClClClaClaCCClaClaClap!Clap!Clap!ClaCClap!ClClCClap!ClaClClCCCClap!ClaClap!Clap!CCCCClaClap!CClap!Clap!ClaClClap!ClaClClaClClClap!Clap!") // 59)
countClaps("ClClap!ClClaCClaCClap!CCCClap!Clap!ClClClap!Clap!Clap!ClCCClaClClCCClap!ClClap!CCClClap!ClaClap!ClaClap!ClCClap!Clap!ClaClCClClCClap!ClaCClCClap!Clap!Clap!ClClClClap!ClaCClaClaClCClClaClap!CClap!CCCCClaClap!ClaClap!") // 78)
countClaps("ClClaClap!ClaClaClap!Clap!Clap!Clap!ClaClaClap!ClaCClaClap!ClClClap!Clap!CClaClap!CClClaClClCClap!ClaClap!ClClaClap!ClCCClaClCClap!ClCClClaClap!ClClaClap!Clap!Clap!Clap!ClCClap!ClClClaClap!Clap!Clap!ClaCClaClClaClCClClap!ClClCCClCClaClCClCCClClaClaClaClap!CClClClap!") // 92)
countClaps("CClClap!ClClap!ClaClap!ClaCCCClaClaCClap!CClap!CClClaClap!CClap!ClClClaClClaClap!CClClaCClap!ClClaCClClaClap!CClap!CClClap!CClap!Clap!Clap!ClClClap!ClClaClap!CCClap!CCClCClCClCClaClaClClaClaClap!") // 72)
countClaps("CCClaClap!CClaClClaClaCClaClClap!ClaCClCClaCClClClaClaCClaCCCClClap!ClaClaClaCClap!ClaClClaClClap!Clap!CClaCClap!CClClap!Clap!ClaCCClCClClap!ClaClaClaCCClaClaClaClCCClaClCClClap!") // 72)
countClaps("ClCClap!ClaClaClCClap!CClap!Clap!ClClCCClClap!CCCClClClaClap!Clap!Clap!ClClaClClaClap!ClCCClaClap!CClClaCCClap!Clap!Clap!CClClaClap!Clap!ClaClCClap!ClCCClap!ClaClap!CCClaClap!CCClaClap!CClaClClaClaClaClap!Clap!CClap!Clap!Clap!Clap!ClClap!") // 82)
countClaps("CClCCCCClap!CClap!Clap!CClap!ClaClaCCCClaClap!Clap!Clap!ClClap!CClaClaClaClaCClap!CClap!ClaCCClClaClClCCClaClaClCClaCCClap!") // 49)
countClaps("ClClaClap!ClaCClaClaClap!Clap!CClClaClap!ClaClap!ClaClClaClaClap!ClaCClCCClaClaCClCClClap!ClCClap!ClClaClaClCClaClap!ClaClClaCCClap!ClaClap!ClClaClap!CClCClap!ClaClap!ClaClCClaClaCClap!ClClClap!Clap!CClClap!Clap!ClClaCClaCClaClap!Clap!CCClaClaClClap!Clap!ClCClClaClaClaClClClCClap!") // 100)
countClaps("ClClap!ClCClClClap!CCClaCCCClaClCClClaClClClaClap!ClaClap!ClCClClap!ClaClap!ClaClClClap!ClCClaCClClap!ClClClClap!ClaClClaClap!ClClClaCClaClClaCClap!CClClap!ClaClap!Clap!ClaCClap!ClaClClap!CClClClaClCClaClaClaCClap!ClaClap!CClap!") // 84)
countClaps("ClaClCClap!Clap!ClaClaClaClap!ClaClap!CClClap!ClaClCClaClClCCClClClClaClap!Clap!CClap!Clap!ClaCClaClClaCClap!ClClCCClaClClaClaCCClClap!Clap!CClaClap!CClap!ClClClap!ClaClaCClaCClClaClaClClaCClClap!ClCCClClap!ClCClap!CClaClaClap!Clap!ClaClap!ClCClaClap!Clap!") // 92)
countClaps("ClCClap!Clap!Clap!ClaCClap!Clap!ClaClaClaClap!Clap!ClaClClap!") // 17)
countClaps("ClClap!CClap!ClClaClaClClClClaClaClap!CCClaClaClaClap!ClClaClap!Clap!ClCClaCClap!ClClaCClaClap!Clap!ClaClaClap!ClaClap!CClap!ClCClap!ClClap!ClaClaClaClaClaClap!CClClClaCClap!CClaCCClaCClap!Clap!CCCClap!ClClClaCClap!Clap!ClaClClap!ClaClCClClap!") // 84)
