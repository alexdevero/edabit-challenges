function evenOddString(txt) {
	return [...[...txt].filter((el, i) => i % 2 === 0), ' ', ...[...txt].filter((el, i) => i % 2 !== 0)]
		.join('')
}

evenOddString("mubashir") // "mbsi uahr"
evenOddString("edabit") // "eai dbt"
evenOddString("airforce") // "aroc ifre"
evenOddString("Wolfeschlegelsteinhausenbergerdorff") // "Wleclgltihuebredrf ofsheesenasnegrof"
evenOddString("METHIONYLTHREONYLTHREONYGLUTAMINYLARGINYL") // "MTINLHENLHENGUAIYAGNL EHOYTROYTROYLTMNLRIY"
evenOddString("PNEUMONOULTRAMICROSCOPICSILICOVOLCANOCONIOSIS") // "PEMNUTAIRSOISLCVLAOOISS NUOOLRMCOCPCIIOOCNCNOI"
evenOddString("PSEUDOPSEUDOHYPOPARATHYROIDISM") // "PEDPEDHPPRTYODS SUOSUOYOAAHRIIM"
evenOddString("FLOCCINAUCINIHILIPILIFICATION") // "FOCNUIIIIIIIAIN LCIACNHLPLFCTO"
evenOddString("SUBDERMATOGLYPHIC") // "SBEMTGYHC UDRAOLPI"
