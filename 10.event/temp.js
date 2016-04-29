function say(name,word){
    console.log(this.name,name,word);
}
var obj = {name:'zfpx'};
Function.prototype.bind = function(obj){
  var self = this;
    var args = Array.prototype.slice.call(arguments,1);
  return function(){
      var params = Array.prototype.slice.call(arguments);
      self.apply(obj,args.concat(params));
  }
}
var newSay = say.bind(obj,'hello');

newSay('world');