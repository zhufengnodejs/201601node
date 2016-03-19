var ejs = require('ejs');
var str = '<h1><%=title%></h1>';
var template = ejs.compile(str );
console.log(template({title:'hello'}));

