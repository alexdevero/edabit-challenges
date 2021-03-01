function moveZeros(arr){
  return arr.filter((x) => x !== 0)
    .concat(arr.filter((x) => x === 0))
}

moveZeros([1,2,0,1,0,1,0,3,0,1]) // [1,2,1,1,3,1,0,0,0,0]
moveZeros([9,0.0,0,9,1,2,0,1,0,1,0.0,3,0,1,9,0,0,0,0,9]) // [9,9,1,2,1,1,3,1,9,9,0,0,0,0,0,0,0,0,0,0]
moveZeros(["a",0,0,"b","c","d",0,1,0,1,0,3,0,1,9,0,0,0,0,9]) // ["a","b","c","d",1,1,3,1,9,9,0,0,0,0,0,0,0,0,0,0]
moveZeros(["a",0,0,"b",null,"c","d",0,1,false,0,1,0,3,[],0,1,9,0,0,0,0,9]) // ["a","b",null,"c","d",1,false,1,3,[],1,9,9,0,0,0,0,0,0,0,0,0,0]
moveZeros([0,1,null,2,false,1,0]) // [1,null,2,false,1,0,0]
moveZeros(["a","b"]) // ["a","b"]
moveZeros(["a"]) // ["a"]
moveZeros([0,0]) // [0,0]
moveZeros([0]) // [0]
moveZeros([false]) // [false]
moveZeros([]) // []
