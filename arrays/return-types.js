function arrayValuesTypes(arr) {
	return arr.map(el => typeof el)
}

arrayValuesTypes([1, 10]) // ['number', 'number'])
arrayValuesTypes([["hello" , 1]  , 10]) // ['object', 'number'])
arrayValuesTypes(["shashwat", 10, 90]) // ['string', 'number', 'number'])
arrayValuesTypes([[], true]) // ['object', 'boolean'])
arrayValuesTypes([false, false, "true"]) // ['boolean', 'boolean', "string"])
arrayValuesTypes([1, 10]) // ['number', 'number'])
arrayValuesTypes([undefined, null]) // ['undefined', 'object'])
arrayValuesTypes([function(){let x =10;}, 10]) // ['function', 'number'])
