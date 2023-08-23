CREATE TABLE CUSTOMER (
	CUSTID CHAR(10) PRIMARY KEY,
	CUSTNAME VARCHAR(10) NOT NULL,
	ADDR CHAR(11) NOT NULL,
	PHONE CHAR(11),
    BIRTH DATE 
	-- Age int check (Age >=18)
	);
      
DESC CUSTOMER;
-- 외래키 제약조건
-- 두 테이블 사이의 관계를 맺음
-- 다른 테이블의 기본키를 외래키로 연결
-- 기준 테이블: 기본키를 갖는 테이블(CUSTOMER)
-- 참조 테이블: 외래키가 있는 테이블(ORDERS)
-- 형식 : FOREIGN KEY (row_name) REFERENCES 기준_테이블(row_name) 

-- ON UPDATE CASCADE : 기준 테이블의 데이터가 변경되면 참조 테이블의 데이터도 변경 
-- ON DELETE CASCADE : 기준 테이블의 데이터가 삭제되면 참조 테이블의 데이터도 삭제 

-- 테이블 ORDERS 생성
CREATE TABLE ORDERS (
	ORDERID int PRIMARY KEY AUTO_INCREMENT,
	CUSTID CHAR(10) NOT NULL,
	PRODNAME CHAR(6) NOT NULL,
	PRICE INT NOT NULL,
	AMOUNT SMALLINT NOT NULL,
	FOREIGN KEY (CUSTID) REFERENCES CUSTOMER(CUSTID) ON UPDATE CASCADE ON DELETE CASCADE
);

-- INSERT 추가 
INSERT INTO CUSTOMER (CUSTID,CUSTNAME,ADDR,PHONE,BIRTH) 
			VALUES ('LUCKY','강해원','미국 뉴욕','01022223333','2002-03-05');

INSERT INTO CUSTOMER (ADDR,PHONE,BIRTH,CUSTID,CUSTNAME) 
	VALUES ('대한민국 부산', '01098765432', '2007-04-28', 'WOW', '이지은');
    
    -- 속성을 지정하지 않는다면, 컬럼이 정이된 순서대로 입력
INSERT INTO CUSTOMER VALUES('HAPPY', '최시은', '일본 오키나와', '01033331234', '1970-10-31');    

-- 여러 튜플 동시 추가 
INSERT INTO CUSTOMER VALUES
		('ASDF', '강세희', '대한민국 부산', '01033331235', '2004-11-11'),
        ('SDFG', '윤지성', '일본 도쿄', '01033331236', '1995-02-15'),
        ('DFGH', '이재은', '미국 뉴욕', '01033331237', '2004-06-07');

INSERT INTO CUSTOMER VALUES
		('KIWI', '김키위', '대한민국 서울', '01012341234', '1990-03-17'),
		('APPLE', '이사과', '대한민국 포항', '01012344321', '1992-06-17');

INSERT INTO ORDERS VALUES 
	(NULL, 'KIWI', '프링글스', '3000', 5),
	(NULL, 'APPLE', '프링글스', '3000', 1),
	(NULL, 'KIWI', '홈런볼', '2000', 3);

-- UPDATE 수정 
-- CUSTID 가 HAPPY인 고객의 주소를 대한민국 서울로 변경
UPDATE CUSTOMER SET ADDR = '대한민국 서울' WHERE CUSTID = 'HAPPY';

-- DELETE 삭제
-- CUSTID 가 HAPPY 인 사람의 정보를 테이블에서 삭제
DELETE FROM CUSTOMER WHERE CUSTID = 'HAPPY';

-- 고객 테이블에 'apple'고객을 삭제했을 때, 주문 테이블에서 'apple' 고객의 주문 정보가 함께 삭제되는지?
DELETE FROM CUSTOMER WHERE CUSTID= 'APPLE';

-- SELECT 조회
SELECT * FROM CUSTOMER;
SELECT * FROM ORDERS;


-- 틀리면 다 지워버리기  
DROP TABLE CUSTOMER;
DROP TABLE ORDERS;

