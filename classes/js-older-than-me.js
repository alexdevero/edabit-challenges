class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	compareAge(other) {
		if (this.age === other.age) {
			return `${other.name} is the same age as me.`
		} else if (this.age < other.age) {
			return `${other.name} is older than me.`
		} else {
			return `${other.name} is younger than me.`
		}
	}
}

const p1 = new Person("Samuel", 24);
const p2 = new Person("Joel", 36);
const p3 = new Person("Lily", 24);

p1.compareAge(p2) // "Joel is older than me."
p1.compareAge(p3) // "Lily is the same age as me."

p2.compareAge(p1) // "Samuel is younger than me."
p2.compareAge(p3) // "Lily is younger than me."

p3.compareAge(p1) // "Samuel is the same age as me."
p3.compareAge(p2) // "Joel is older than me."
