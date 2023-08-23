-- 데이터베이스 : 데이터의 집합
-- DBMS : 데이터베이스를 운영/관리하는 프로그램 (ex.MySQL)
-- 테이블 : 하나 이상의 열과 행으로 구성된 데이터베이스의 최소 단위 
-- SQL : RDBMS 에서 사용되는 언어(데이터베이스를 구축, 관리, 활용하기 위한 언어)
-- 참고! SQL은 대소문자를 구별하지 않는다 하지만, 가독성을 위해 키워드는 대문자로 작성(관례) 
-- 번개커서 -> cmd + enter 

-- DDL(Date Definition Langage)
-- 데이터베이스, 테이블을 정의하는 언어 

-- [Database 관련 명령어]
-- 1. Database 생성
create database sesac default character set utf8 collate utf8_general_ci;
-- CREATE DATABASE sesac;

-- 2. Database 목록 조회
show databases;

-- 3. Database 사용 선언 (껐다 키면 다시 해야됨. -> 까먹지말 것)
use sesac;

-- 4. Datebase 삭제
drop database sesac;

-- [Table 관련 명령어]
-- 1. 테이블 생성
-- 제약조건 ("옵션")
-- NOT NULL : NULL 허용 X 
-- AUTO_INCREMENT : 자동 숫자 증가, 테이블에 데이터 추가할 때마다 자동으로 숫자 증가 
-- PRIMARY KEY : 기본키(중복값 허용 x, NULL 허용 x) -> 하나의 테이블당 하나만!!
-- DEFAULT 기본값 : 특정 속성의 기본 값 설정 
-- UNIQUE : 중복 허용 x -> pk아닌감? -> null 허용ㅎㅎ -> 하나의 테이블당 여러개 가능!! 
CREATE TABLE PRODUCT (
	ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	NAME VARCHAR(50) NOT NULL,
	MODEL_NUMBER VARCHAR(15) NOT NULL,
	SERIES VARCHAR(30) NOT NULL
	);
    
    -- 2. 테이블 목록 확인
    -- 현재 사용중인 데이터베이스의 모든 테이블 조회 
    SHOW TABLES;
    
    -- 3. 테이블 구조 확인
    -- 테이블의 컬럼 정보 (자료형, NULL 여부, KEY ,DEFAULT 등)
    DESC PRODUCT;
    
    -- 4. 테이블 삭제
    -- drop : 테이블 존재 자체를 없앰 
    DROP TABLE PRODUCT;			
    
    -- truncate : 테이블 구조만 남겨놓고 모든 행 삭제 (초기화)
    TRUNCATE TABLE PRODUCT;
    
    -- 5. 테이블 정의 수정
    -- 이미 테이블을 만들었고, 테이블에 데이터가 추가되었을 때
    -- 컬럼 정보가 바뀌어야 하는 경우 사용 
    
    -- 5-1. 컬럼 추가 
    ALTER TABLE PRODUCT ADD NEW_COLUMN DATE;    
    
    -- 5-2. 컬럼 수정 (자료형 date-> int 로 바꾸기) 
    ALTER TABLE PRODUCT MODIFY NEW_COLUMN INT;
    -- 컬럼명 변경시 change 사용 
    ALTER TABLE PRODUCT CHANGE NEW_COLUMN NEW_COLUMN2 INT;
    
    -- 5.3 컬럼 삭제
    ALTER TABLE PRODUCT DROP NEW_COLUMN2;
    DESC PRODUCT;
    
    
    