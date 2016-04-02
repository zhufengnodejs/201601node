# 连接数据库
```
mysql -uroot -p123456  -h123.57.143.189
```
> MYSQL环境，是支持你打回车换行的，只有你打了分号，才算是结尾

#创建表并指定主键 
```
create table student(id int primary key,name varchar(50));
create table student(id int primary key auto_increment,name varchar(50));
```

#打开数据库
```
use studb;
```

#查看当前打开的数据库
```
select database()
```
#显示数据下面所有的表
```
show tables
```

#显示表的定义
```
show columns from student
```

#删除一个表
```
drop table student
```

#插入一条记录
```
 insert into student(id,name) values(1,'张三');
 insert into student values(null,'zfpx',1,10);
```
#查询表中所有的记录，查询所有列
```
select * from student;
```

#更新记录
```
update student set age=age+1 where id=2;
```

#删除记录
```
 delete from student where name='刘萌';
```

