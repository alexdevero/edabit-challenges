class Rectangle {
	constructor(x, y, width, height) {
		this.x = x
		this.y = y
		this.width = width
		this.height = height
	}

	toString() {
		return `[x=${this.x}, y=${this.y}, width=${this.width}, height=${this.height}]`
	}
}

Test.assertEquals((new Rectangle(1,2,5,6)).x, 1, "Invalid X.");
Test.assertEquals((new Rectangle(1,2,5,6)).y, 2, "Invalid Y.");
Test.assertEquals((new Rectangle(1,2,5,6)).width, 5, "Invalid Width.");
Test.assertEquals((new Rectangle(1,2,5,6)).height, 6, "Invalid Height.");
Test.assertEquals((new Rectangle(1,2,5,6)).toString(), "[x=1, y=2, width=5, height=6]", "Invalid toString output.");
