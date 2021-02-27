const fixImport = (s) => {
	let [a,b,c,d]=s.split(' ')

	return `${c} ${d} ${a} ${b}`
}

fixImport("import object from module_name") // "from module_name import object"
fixImport("import randint from random") // "from random import randint"
fixImport("import pi from math") // "from math import pi"
