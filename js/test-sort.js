var arr = [123,234,222,454];
var compare = function (a,b) {
    return a - b;
}
var rst = arr.sort(compare);
console.log(rst);