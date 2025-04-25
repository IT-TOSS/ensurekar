 CREATE DATABASE IF NOT EXISTS ensurekar;

use ensurekar;

-- -----------------user table------------------

 drop table users;
 CREATE TABLE users (
     userId VARCHAR(500) PRIMARY KEY,
     firstName VARCHAR(100),
     lastName VARCHAR(100),
     email VARCHAR(150) UNIQUE,
     phoneNumber VARCHAR(20),
     whatsappNumber VARCHAR(20),
     photoURL TEXT,
	 password TEXT
);

SELECT * 
FROM users;


DELETE FROM users WHERE email = 'toss125training@gmail.com';


-- -------------databas of user information.-----------------

drop table user_info;
CREATE TABLE IF NOT EXISTS user_info (
    id INT AUTO_INCREMENT PRIMARY KEY,

    -- Personal
    userName VARCHAR(100),
    firstName VARCHAR(100),
    lastName VARCHAR(100),
    fatherName VARCHAR(100),
    DOB DATE,
    sex ENUM('Male', 'Female', 'Other'),
    maritalStatus ENUM('Single', 'Married', 'Other'),
    -- personalDocument VARCHAR(255),   -- hear store pdf or pdf name

    -- Company
    company VARCHAR(150),
    organisationType VARCHAR(100),
	-- investmentDetails VARCHAR(255), -- hear store pdf or pdf name

    -- Identity
    pan VARCHAR(20),
    aadhar VARCHAR(20),
    din VARCHAR(20),
    addressProof VARCHAR(150),
    addressProofName VARCHAR(100),
    nationality VARCHAR(50),
   -- aadharCard VARCHAR(255), -- hear store pdf or pdf name
    -- form16 VARCHAR(255), -- hear store pdf or pdf name

    -- Bank
    bank VARCHAR(100),
    accountNumber VARCHAR(50),
    ifsc VARCHAR(20),
    -- bankDetails VARCHAR(255), -- hear store pdf or pdf name

    -- Contact
    address TEXT,
    state VARCHAR(100),
    city VARCHAR(100),
    pin VARCHAR(10),
    email VARCHAR(150),
    secondaryEmail VARCHAR(150),
    contactNo VARCHAR(20),
    secondaryContact VARCHAR(20),
     -- otherDocument VARCHAR(255), -- hear store pdf or pdf name

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

select * from user_info;

DELETE FROM user_info WHERE id = 1;

-- ---------------- orders and payment information it's under the Development -----------------




drop table orders;

CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_name VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    phone VARCHAR(20),
    address TEXT,
    items TEXT, -- store itemsData as JSON
    total DECIMAL(10, 2),
    payment_status ENUM('pending', 'completed', 'failed') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


SELECT * 
FROM orders;


DELETE FROM orders
WHERE id = 4;


DELETE FROM orders
WHERE email = 'krishna.vish9329@gmail.com';
