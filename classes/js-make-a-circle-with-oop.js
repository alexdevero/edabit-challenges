class Rectangle {
  constructor(sideA,sideB){
    this.sideA = sideA;
    this.sideB = sideB;
  }
  getArea(){return this.sideA*this.sideB};
  getPerimeter(){return (this.sideA + this.sideB) *2 };
}


class Circle {
	//put code here
	constructor(r) {
		this.r = r
	}

	getArea() {
		return Math.PI * Math.pow(this.r, 2)
	}

  getPerimeter() {
		return 2 * Math.PI * this.r
	}
}

function round(number) {
  var factor = Math.pow(10, 5);
  return Math.round(number * factor) / factor;
}

let circo = new Circle(20);
round(circo.getArea()) // 1256.63706
round(circo.getPerimeter()) // 125.66371

let circo1 = new Circle(2);
round(circo1.getArea()) // 12.56637
round(circo1.getPerimeter()) // 12.56637

let circo2 = new Circle(4.4);
round(circo2.getArea()) // 60.82123
round(circo2.getPerimeter()), // 27.64602

let randomInt = round(Math.floor(Math.random() * Math.floor(200)));
//scroll down for spoilers that are hard to use
















let circo3 = new Circle(randomInt);
round(circo3.getArea()), round(Math.PI*Math.pow(randomI //t,2))
round(circo3.getPerimeter()), round(2*Math. //I*randomInt)
