class Employee {
	constructor (firstname, lastname) {
		this.firstname = firstname;
		this.lastname = lastname;
		// Complete the code!
		this.fullname = `${firstname} ${lastname}`
		this.email = `${firstname.toLowerCase()}.${lastname.toLowerCase()}@company.com`
	}
}

emp1 = new Employee('John', 'Smith')
emp2 = new Employee('Mary',  'Sue')
emp3 = new Employee('Antony', 'Walker')
emp4 = new Employee('Joshua', 'Senoron')

emp1.firstname // 'John'
emp1.lastname // 'Smith'
emp1.fullname // 'John Smith'
emp1.email // 'john.smith@company.com'
emp2.firstname // 'Mary'
emp2.lastname // 'Sue'
emp2.fullname // 'Mary Sue'
emp2.email // 'mary.sue@company.com'
emp3.firstname // 'Antony'
emp3.lastname // 'Walker'
emp3.fullname // 'Antony Walker'
emp3.email // 'antony.walker@company.com'
emp4.firstname // 'Joshua'
emp4.lastname // 'Senoron'
emp4.fullname // 'Joshua Senoron'
emp4.email // 'joshua.senoron@company.com'
