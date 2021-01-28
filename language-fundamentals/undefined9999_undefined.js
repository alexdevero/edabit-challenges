function undefined9999(any) {
	return typeof any === 'undefined'
}

var o = { I: [0, !1], am: ['', !1], handsome: [false, !1], and: [null, !1], lucky: [undefined, !0] }
Object.keys(o).forEach(e => Test.assertEquals(undefined9999(o[e][0]), o[e][1]))
