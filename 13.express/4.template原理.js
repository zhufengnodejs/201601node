//渲染模板
function render(tmpl,data){
    //用真实的值替换占位变量
    return tmpl.replace(/\{\{(\w+)\}\}/,function(matched,group1){
        console.log(arguments);
        return data[group1];
    })
}//把模板里的变量替换成对象里的属性，变量和属性名一定要相同
var result = render('<h1>{{title}}</h1>',{title:'欢迎'});
console.log(result);