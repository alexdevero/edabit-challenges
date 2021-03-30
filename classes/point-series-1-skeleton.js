class Point {
	constructor(x, y) {
		this.x = x
		this.y = y
	}

	toString() {
		return `[x=${this.x}, y=${this.y}]`
	}
}

Test.assertEquals((new Point(1,2)).x, 1, "Invalid X.");
Test.assertEquals((new Point(1,2)).y, 2, "Invalid Y.");
Test.assertEquals((new Point(1,2)).toString(), "[x=1, y=2]", "Invalid toString output.");
