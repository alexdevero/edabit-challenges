function dnaToRna(dna) {
  const rna = { A: 'U', T: 'A', G: 'C', C: 'G' }

	return dna.replace(/A|T|G|C/g, (r) => {
		return rna[r]
	})
}

dnaToRna("GCGTAC") // "CGCAUG"
dnaToRna("ATTAGCGCGATATACGCGTAC") // "UAAUCGCGCUAUAUGCGCAUG"
dnaToRna("CAGTATGCTGCAT") // "GUCAUACGACGUA"
dnaToRna("CGATATA") // "GCUAUAU"
dnaToRna("GCAGCTACA") // "CGUCGAUGU"
