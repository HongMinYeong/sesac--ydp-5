-- 실습. DDL
CREATE TABLE MEMBER (
	ID VARCHAR(20) PRIMARY KEY,
	NAME VARCHAR(5) NOT NULL,
	AGE INT,
	GENDER VARCHAR(2) NOT NULL,
    EMAIL VARCHAR(50),
    PROMOTION VARCHAR(2) DEFAULT 'X'
	);

-- 실습. DDL(2)
ALTER TABLE MEMBER MODIFY ID VARCHAR(10);
ALTER TABLE MEMBER DROP AGE;
ALTER TABLE MEMBER ADD INTEREST VARCHAR(100);    

-- 실습.CREATE 문
CREATE TABLE USER (
	ID VARCHAR(10) NOT NULL PRIMARY KEY,
	PW VARCHAR(20) NOT NULL,
	NAME VARCHAR(5) NOT NULL,
	GENDER ENUM('F','M','') DEFAULT '',
    BIRTHDAY DATE NOT NULL,
    AGE INT(3) NOT NULL DEFAULT 0
	);

-- 실습. INSERT 문
INSERT INTO USER VALUES
		('hong1234', '8o4bkg', '홍길동', 'M', '1990-01-31','33'),
        ('sexysung', '87awjkdf', '성춘향', 'F', '1992-03-31','31'),
        ('power70', 'qxur8sda', '변사또', 'M', '1970-05-02','53'),
        ('hanjo', 'jk48fn4', '한조', 'M', '1984-10-18','39'),
        ('widowmaker', '38ewifh3', '위도우', 'F', '1976-06-27','47'),
        ('dvadva', 'k3f3ah', '송하나', 'F', '2001-06-03','22'),
        ('jungkrat', '4ifha7f', '정크랫', 'M', '1999-11-11','24');

-- 실습.SELECT 문
SELECT * FROM USER;

SELECT * FROM USER ORDER BY BIRTHDAY ASC;
SELECT * FROM USER WHERE GENDER = 'M' ORDER BY NAME DESC;


SELECT ID, NAME FROM USER WHERE BIRTHDAY   LIKE '199%';

SELECT * FROM USER WHERE BIRTHDAY LIKE '%-06-%' ORDER BY BIRTHDAY ASC;

SELECT * FROM USER WHERE GENDER = 'M' AND BIRTHDAY LIKE '197%';

SELECT *FROM USER ORDER BY AGE DESC LIMIT 3;

SELECT * FROM USER WHERE AGE BETWEEN 25 AND 50;

UPDATE USER SET PW = '12345678' WHERE ID = 'hong1234';

DELETE FROM USER WHERE ID = 'jungkrat';


CREATE TABLE AUTHORS (
	AUTHOR_ID INT NOT NULL PRIMARY KEY,
	FIRST_NAME VARCHAR(50),
	LAST_NAME VARCHAR(50),
	EMAIL VARCHAR(50)
)

CREATE TABLE BOOKS (
	BOOK_ID INT NOT NULL PRIMARY KEY,
	TITLE VARCHAR(100),
	AUTHOR_ID INT NOT NULL,
	FOREIGN KEY (AUTHOR_ID) REFERENCES AUTHORS(AUTHOR_ID),
	PUBLICATION_DATE DATE 
)

CREATE TABLE ORDERS (
	ORDER_ID INT NOT NULL PRIMARY KEY,
	BOOK_ID INT,
	FOREIGN KEY (BOOK_ID) REFERENCES BOOKS(BOOK_ID),
	CUSTOMER_NAME VARCHAR(50),
	ORDER_DATE DATE
)

INSERT INTO AUTHORS VALUES
	(1, 'J.K.', 'Rowling', 'jkrowling@gmail.com'),
    (2, 'George R.R.', 'Martin', 'grmartin@yahoo.com'),
    (3, 'Stephen', 'King', 'sking@hotmail.com');

INSERT INTO BOOKS VALUES 
	(1, 'Harry Potter and the Philosopher''s Stone', 1, '1997-06-26'),
    (2, 'A Game of Thrones', 2, '1996-08-06'),
    (3, 'The Shining', 3, '1977-01-28');

INSERT INTO ORDERS VALUES
	(1, 1, 'John Smith', '2022-02-15'),
    (2, 2, 'Jane Doe', '2022-02-16'),
    (3, 3, 'Bob Johnson', '2022-02-17');
SELECT * FROM orders;

-- 1. author_id가 1인 작성자의 이메일을 jkrowling@yahoo.com으로 업데이트하는 SQL 문을 작성합니다.
UPDATE AUTHORS SET EMAIL = 'jkrowling@yahoo.com' WHERE AUTHOR_ID = 1;
-- 2. books 테이블에서 book_id 2인 책을 삭제하는 SQL 문을 작성합니다.
-- ORDERS 테이블에 book_id 외래키 제한 해제 
ALTER TABLE ORDERS DROP CONSTRAINT ORDERS_IBFK_1;
-- orders -> book_id 외래키 재설정 (on delete cascade)
ALTER TABLE ORDERS ADD FOREIGN KEY (BOOK_ID) REFERENCES BOOKS (BOOK_ID) ON DELETE CASCADE;
-- book_id = 2 인 항목 삭제 
DELETE FROM BOOKS WHERE BOOK_ID = 2; 



-- 3. 다음 세부 정보가 포함된 새 책을 삽입하는 SQL 문을 작성합니다.
-- 책 ID: 4
-- 제목: The Stand
-- 저자 ID: 3
-- 발행일자 : 1978-01-01
INSERT INTO BOOKS VALUES
	(4,'THE STAND',3,'1978-01-01');
-- 4. book_id 1인 책의 출판 날짜를 1997-06-30으로 업데이트하는 SQL 문을 작성하십시오.
UPDATE BOOKS SET PUBLICATION_DATE = '1997-06-30' WHERE BOOK_ID = 1;

-- 5. 022-02-17 이전에 접수된 모든 주문을 삭제하는 SQL 문을 작성합니다.

DELETE FROM ORDERS WHERE ORDER_DATE < '2022-02-17';
-- 6. 다음 세부 정보와 함께 새 주문을 삽입하는 SQL 문을 작성합니다.
-- 주문 ID: 4
-- 책 ID: 1
-- 고객 이름: Sarah Johnson
-- 주문일자 : 2022-02-18
INSERT INTO ORDERS VALUES
	(4,1,'SARAH JOHNSON','2022-02-18');

-- 7. order_id가 1인 주문의 고객 이름을 Jack Smith로 업데이트하는 SQL 문을 작성합니다.
UPDATE ORDERS SET CUSTOMER_NAME = 'JACK SMITH'  WHERE ORDER_ID = 1;
-- 8. 다음 세부 정보와 함께 새 작성자를 삽입하는 SQL 문을 작성합니다.
-- 저자 ID: 4
-- 이름: agatha
-- 성: christie
-- 이메일: agatha.christie@example.com
INSERT INTO AUTHORS VALUES
	(4,'AGATHA','CHRISTIE','AGATHA.CHRISTIE@EXAMPLE.COM');
-- 9. author_id 2인 작성자의 성을 Martinez로 업데이트하는 SQL 문을 작성합니다.
UPDATE AUTHORS SET LAST_NAME = 'MARTINEZ' WHERE AUTHOR_ID = 2;

-- 10. author_id 3인 저자가 쓴 모든 책을 삭제하는 SQL 문을 작성합니다.
DELETE FROM BOOKS WHERE AUTHOR_ID = 3;
-- 10번은 ORDERS에서도 BOOK_ID를 참조해서 BOOKS 테이블에서 AUTHOR_ID = 3인 튜플을 삭제하면 AUTHOR 테이블에서는 해당 튜플이 삭제가 안되는데
-- ORDER 테이블 BOOK_ID에 ON DELETE CASCADE 제한을 걸어서 그런가 다 삭제됨 

SELECT * FROM authors;
SELECT * FROM books;
SELECT * FROM orders;


-- 확인용

DROP TABLE AUTHORS;

DROP TABLE BOOKS;
 DROP TABLE ORDERS;


DESC MEMBER;
DESC USER;

DESC AUTHORS;
DESC BOOKS;
DESC ORDERS;