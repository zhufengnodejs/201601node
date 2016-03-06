function  cb(err,data){
    if(err){
        console.error(err);
    }else{
        console.log(data);
    }
}
try{
    setTimeout(cb,1000);
}catch(e){
    console.error(e);
}
console.log('c');