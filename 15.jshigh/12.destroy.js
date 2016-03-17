function City(){}
function one(){
    var a = new City;
    return function(){
        return a;
    }
}
var s = one();
var s2 = one();