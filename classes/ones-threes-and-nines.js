class OnesThreesNines {
	constructor(num) {
		this.num = num;
	}

	get ones() {
		return this.num / 1
	}

	get threes(){
		return Math.floor(this.num / 3)
	}

	get nines(){
		return Math.floor(this.num / 9)
	}
}

const probs = [{
	num:0,
	which:'ones',
	expect:0
},{
	num:1,
	which:'threes',
	expect:0
},{
	num:2,
	which:'nines',
	expect:0
},{
	num:3,
	which:'ones',
	expect:3
},{
	num:4,
	which:'threes',
	expect:1
},{
	num:10,
	which:'nines',
	expect:1
},{
	num:13,
	which:'ones',
	expect:13
},{
	num:15,
	which:'threes',
	expect:5
},{
	num:17,
	which:'nines',
	expect:1
},{
	num:20,
	which:'nines',
	expect:2
}];
probs.forEach(prob=>{
    let testInstance = new OnesThreesNines(prob.num);
    Test.assertEquals(testInstance[prob.which], prob.expect)
})
