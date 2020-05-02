const createPhoneNumber = arr => '(xxx) xxx-xxxx'.replace(/x/g, () => arr.shift());

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // "(123) 456-7890"
createPhoneNumber([1, 4, 7, 6, 1, 2, 5, 7, 9, 5]) // "(147) 612-5795"
createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]) // "(111) 111-1111"
createPhoneNumber([8, 7, 4, 1, 2, 5, 6, 5, 8, 2]) // "(874) 125-6582"
