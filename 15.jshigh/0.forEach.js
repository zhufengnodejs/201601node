
//迭代输出每一天元素
function each(){
    //console.log(Array.prototype.forEach.call);
    //var args = Array.prototype.slice.call(arguments);
    Array.prototype.forEach.apply(arguments,[function(item){
        console.log(item);
    }]);
}
each(1,2,3,4,5);

/*
 [1,2,3].forEach(function(item){
 console.log(item);
 })*/