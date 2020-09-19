function findIt(obj, name) {
	return Object.keys(obj).indexOf(name) > -1 ? `${name[0].toUpperCase()}${name.substring(1)} is gone...` : `${name[0].toUpperCase()}${name.substring(1)} is here!`
}

Test.assertEquals(findIt({}, "rambo"),"Rambo is here!")
Test.assertEquals(findIt({}, "heman"),"Heman is here!")

Test.assertEquals(findIt({
  tv: 30,
  stereo: 50,
}, "rocky"),"Rocky is here!")

Test.assertEquals(findIt({
  tv: 30,
  stereo: 50,
}, "spiderman"),"Spiderman is here!")

Test.assertEquals(findIt({
  tv: 30,
  stereo: 50,
	julius: 100,
}, "julius"),"Julius is gone...")

Test.assertEquals(findIt({
  tv: 30,
  stereo: 50,
	batman: 200,
}, "batman"),"Batman is gone...")
