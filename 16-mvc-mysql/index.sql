-- user 라는 새로운 계정 생성 - mysql 사용자 추가하기

CREATE USER 'user'@'%' IDENTIFIED WITH mysql_native_password by '1234';

--user 계정에 DB 권한 부여 (모든 DB에 접근 가능하도록)// *.* -> 모든 데이터베이스의 모든 테이블 의미 
GRANT ALL PRIVILEGES ON *.* TO 'user'@'%' WITH GRANT OPTION;

-- 현재 사용중인 mysql 캐시를 지우고 새로운 설정 적용
FLUSH PRIVILEGES;

--mysql 비번 변경하고 싶다면?
-- ALTER USER 'user'@'%' IDENTIFIED WITH mysql_native_password BY '비밀번호';
-- database 인코딩 다시 정의해서 생성 
show databases;
select * from mysql.user;
-- 이모지, 특수 문자를 사용할 수 있는 인코딩
create database mvc character set utf8mb4 collate utf8mb4_unicode_ci;

use mvc;
drop table visitor;
CREATE TABLE VISITOR (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	name VARCHAR(10) NOT NULL,
	comment MEDIUMTEXT
	);
    
    DESC VISITOR;
    SELECT * FROM VISITOR

	INSERT INTO VISITOR 
			VALUES ('1','홍길동','내가 왔다.'),
			('2','이찬혁','으라차차');
