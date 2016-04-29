/**
 * filter
 * map
 * forEach
 * reduce
 * reduceRight
 * indexOf
 * lastIndexOf
 * sort
 * every
 * some
 *
 **/
var arr = [1,2,3];
var s = arr.filter(function(num){
    return num >0;
});
var s2 = arr.map(function(num){
    return num *10;
});
console.log(s2);