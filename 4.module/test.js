var person = {
    a1:'d',
    name:'zfpx',
    age:6,
    1:22
}
console.log(Object.keys(person));
for(var attr in person){
    console.log(attr);
}

function Person(){
  console.log('aa');
    return 'a';
}
console.log(Person());