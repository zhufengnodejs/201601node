var c =1;
/**
 *  * this
 * var 函数声明
 *
 *
 * arguments 形参  length callee 类数组
 *
 */

function fn1(){
    /*{
        arguments
    }*/
    var a =10;
    function fn2(){
        var b =5;
 // VO = var 函数声明 arguments
//先从当前的上下文环境中的VO中找，
//如果当前VO里没有，会从作用域链中找
        console.log(b);
        console.log(a);
        console.log(c);
    }
   fn2();
}
fn1();