var Person = require('./person.js');
var Person2 = require('./person2.js');
Person.hello();
Person2.hello();
console.log(Object.keys(require.cache));
//delete require.cache[Object.keys(require.cache)[1]];
//delete require.cache['d:\\vip\\gitcode\\201601node\\4.module\\person.js'];
var Person = require('./person.js');