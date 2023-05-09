let arr = [5,7,9];
console.log(arr.length);
let result = arr.map(function(item, index, array) {

    return item + 1

});
console.log(arr);
console.log(result);