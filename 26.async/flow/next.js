var tasks = [
    function(next){
        next(null,1);
    },
    function(next){
        next(null,2);
    }
]
var i=0;
function next(err,data){
    if(err){
        throw Error(err);
    }
    console.log(data);
  if(i>=tasks.length){
        return;
  }
 var task = tasks[i++];
 task(next);
}
next();