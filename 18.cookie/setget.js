
var document = {};
Object.defineProperty(document,'cookies',{
    value:[]
})

Object.defineProperty(document,'cookie',{
    set:function(cookie){
        this.cookies.push(cookie);
    },
    get:function(){
        return this.cookies;
    }
})

document.cookie = 'name=zfpx';
document.cookie = 'age=6';
console.log(document.cookie );