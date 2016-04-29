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

##插入和删除
1. 先插入主键，再插入外键
2. 先删除外键 ，再删除主键


#查询全班的语文平均分
```
select AVG(grade.score) from  grade,course
where  grade.cid = course.id and course.name = '语文'
```

#查询每个学生的平均成绩
```
-- 当group by 之后select这后只能出现两种 ，一个分组的条件，一个是聚合后的结果
select student.name,AVG(grade.score) from grade,student
where  grade.sid = student.id
group by student.name
having AVG(grade.score)>=70
order by AVG(grade.score) ASC
limit 0,2
```

#按总分进行全班排名
```
select student.name,SUM(grade.score) from grade,student
where  grade.sid = student.id
group by student.name
order by SUM(grade.score) ASC
```