function totalAmountAdjectives(obj) {
  return Object.values(obj).length
}

const obj = { a: "morron" }
const obj2 = { a: "morron", b: "scumbag", c: "morron", d: "dirtbag" }
const obj3 = {b: "scumbag", c: "morron", d: "dirtbag" }
let dynamic = {}
const random = Test.randomNumber()
let arr = new Array(random).fill(".")
arr.forEach((item, i) => dynamic[i] = item)

Test.assertEquals(totalAmountAdjectives(obj), 1)
Test.assertEquals(totalAmountAdjectives(obj2), 4)
Test.assertEquals(totalAmountAdjectives(obj3), 3)
Test.assertEquals(totalAmountAdjectives(dynamic), random)
