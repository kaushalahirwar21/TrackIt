-- ✅ Database create karna (agar already exist na ho)
CREATE DATABASE IF NOT EXISTS student_db;
USE student_db;

-- ✅ Students table create karna
CREATE TABLE IF NOT EXISTS students (
    id INT AUTO_INCREMENT PRIMARY KEY,       -- unique student id
    name VARCHAR(100) NOT NULL,              -- student ka naam
    roll VARCHAR(50) NOT NULL,               -- roll number
    course VARCHAR(50) NOT NULL,             -- course name
    mobile VARCHAR(15) NOT NULL,             -- mobile number
    amount DECIMAL(10,2) NOT NULL,           -- fees amount (e.g. 5000.00)
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP  -- record insert time
);

-- ✅ Students ka data check karne ke liye
SELECT * FROM students;

-- ❌ Agar future me DB delete karna ho
-- DROP DATABASE IF EXISTS student_db;
