let _ = require('lodash')

let arr = [1,2,3,4,5,6,7,8,9,10];

let chunkSize = 2

let chunk = _.chunk(arr,chunkSize)

console.log(chunk)