CREATE DATABASE student_portal;

USE student_portal;

CREATE TABLE students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  roll_number VARCHAR(50),
  course VARCHAR(50),
  mobile_number VARCHAR(15),
  fees INT
);
