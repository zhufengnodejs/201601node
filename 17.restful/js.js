/**
 * map 替换所有的元素
 * filter 过滤数组中的元素
 * reduce 聚合
 * reduceRight 从右往左聚合
 * some 有一个满足就可以
 * every 全部满足条件
 * indexOf 第一个索引
 * lastIndexOf 最后索引
 */
var nums = [1,2,3,1,6,4];
/**
 *  会依次把数组中的每一元素传入next
 *  每次返回值会传入下一次的current
 *  最后得到一个最终值
 *  获取元素最大值
 */
var s = nums.reduce(function(current,next){
    return current>next?current:next;
},0);
console.log(s);