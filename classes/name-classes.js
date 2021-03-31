class Name {
	constructor(fname, lname) {
		this.fname = fname[0].toUpperCase() + fname.substring(1).toLowerCase()
		this.lname = lname[0].toUpperCase() + lname.substring(1).toLowerCase()
		this.fullname = `${this.fname} ${this.lname}`
		this.initials = `${this.fname[0]}.${this.lname[0]}`
	}
}

a1 = new Name("john", "SMITH")
Test.assertEquals(a1.fname, "John")
Test.assertEquals(a1.lname, "Smith")
Test.assertEquals(a1.fullname, "John Smith")
Test.assertEquals(a1.initials, "J.S")

a2 = new Name("sARah", "fRolliE")
Test.assertEquals(a2.fname, "Sarah")
Test.assertEquals(a2.lname, "Frollie")
Test.assertEquals(a2.fullname, "Sarah Frollie")
Test.assertEquals(a2.initials, "S.F")
