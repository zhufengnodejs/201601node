
try{
    setTimeout(function(){
        throw Error('error');
    },1000);
}catch(e){
    console.error(e);
}
console.log('c');