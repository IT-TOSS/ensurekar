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



drop table user_info;
CREATE TABLE IF NOT EXISTS user_info (
    id INT AUTO_INCREMENT PRIMARY KEY ,
    uid varchar(200) UNIQUE,

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

--  -----------------------------------

-- package table------------------------


-- Database Schema

-- States table to store state information
CREATE TABLE states (
    state_code VARCHAR(2) PRIMARY KEY,
    state_name VARCHAR(100) NOT NULL
);

-- Plan Categories table
CREATE TABLE plan_categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description TEXT
);

-- Plans table to store the different plan types
CREATE TABLE plans (
    id INT AUTO_INCREMENT PRIMARY KEY,
    plan_name VARCHAR(50) NOT NULL,
    description TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    suggestion_text TEXT,
    happy_text TEXT,
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES plan_categories(id)
);

-- Plan Pricing table
CREATE TABLE plan_pricing (
    id INT AUTO_INCREMENT PRIMARY KEY,
    plan_id INT NOT NULL,
    price DECIMAL(10, 2),
    discount DECIMAL(10, 2),
    after_discount VARCHAR(20) NOT NULL,
    later_paid_amount VARCHAR(20),
    later_paid_text TEXT,
    later_paid_info_text TEXT,
    later_paid_info_link TEXT,
    FOREIGN KEY (plan_id) REFERENCES plans(id)
);

-- Plan Features table
CREATE TABLE plan_features (
    id INT AUTO_INCREMENT PRIMARY KEY,
    plan_id INT NOT NULL,
    feature_text TEXT NOT NULL,
    feature_order INT NOT NULL,
    FOREIGN KEY (plan_id) REFERENCES plans(id)
);

-- Plan Offers table
CREATE TABLE plan_offers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    plan_id INT NOT NULL,
    image_url TEXT,
    is_active BOOLEAN DEFAULT FALSE,
    heading VARCHAR(100),
    sub_heading TEXT,
    description TEXT,
    know_more_text TEXT,
    know_more_link TEXT,
    FOREIGN KEY (plan_id) REFERENCES plans(id)
);

-- Plan Split Payment table
CREATE TABLE plan_split_payments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    plan_id INT NOT NULL,
    enabled BOOLEAN DEFAULT FALSE,
    instalments INT,
    instalment_amount VARCHAR(20),
    text TEXT,
    know_more_text TEXT,
    know_more_link TEXT,
    FOREIGN KEY (plan_id) REFERENCES plans(id)
);

-- Plan Recommendations table
CREATE TABLE plan_recommendations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    plan_id INT NOT NULL,
    recommended BOOLEAN DEFAULT FALSE,
    text TEXT,
    FOREIGN KEY (plan_id) REFERENCES plans(id)
);

-- State Plan Mapping table - to define which plans are available in which states
CREATE TABLE state_plan_mapping (
    id INT AUTO_INCREMENT PRIMARY KEY,
    state_code VARCHAR(2) NOT NULL,
    plan_id INT NOT NULL,
    FOREIGN KEY (state_code) REFERENCES states(state_code),
    FOREIGN KEY (plan_id) REFERENCES plans(id)
);

-- Website Configuration table
CREATE TABLE website_config (
    id INT AUTO_INCREMENT PRIMARY KEY,
    heading_start_text VARCHAR(100),
    heading_blue_text VARCHAR(100),
    heading_end_text VARCHAR(100),
    description TEXT,
    default_state VARCHAR(2),
    default_plan VARCHAR(50),
    FOREIGN KEY (default_state) REFERENCES states(state_code)
);

-- Insert data into states table
INSERT INTO states (state_code, state_name) VALUES
('AP', 'Andhra Pradesh'),
('AR', 'Arunachal Pradesh'),
('AS', 'Assam'),
('BR', 'Bihar'),
('CG', 'Chhattisgarh'),
('GA', 'Goa'),
('GJ', 'Gujarat'),
('HR', 'Haryana'),
('HP', 'Himachal Pradesh'),
('JK', 'Jammu and Kashmir'),
('JH', 'Jharkhand'),
('KA', 'Karnataka'),
('KL', 'Kerala'),
('MP', 'Madhya Pradesh'),
('MH', 'Maharashtra'),
('MN', 'Manipur'),
('ML', 'Meghalaya'),
('MZ', 'Mizoram'),
('NL', 'Nagaland'),
('OD', 'Odisha'),
('PB', 'Punjab'),
('RJ', 'Rajasthan'),
('SK', 'Sikkim'),
('TN', 'T amil Nadu'),
('TG', 'Telangana'),
('TR', 'Tripura'),
('UP', 'Uttar Pradesh'),
('UT', 'Uttarakhand'),
('WB', 'West Bengal'),
('AN', 'Andaman and Nicobar Islands'),
('CH', 'Chandigarh'),
('DN', 'Dadra and Nagar Haveli'),
('DD', 'Daman and Diu'),
('DL', 'Delhi'),
('LD', 'Lakshadweep'),
('PY', 'Puducherry');

-- Insert website configuration
INSERT INTO website_config (heading_start_text, heading_blue_text, heading_end_text, description, default_state, default_plan) 
VALUES ('Pick the', ' Business Plan ', 'for Your Goals', 'Our Incorporation Expert\'s Know What is your Need', 'MP', 'Standard');

-- Insert plan categories
INSERT INTO plan_categories (id, name, description) VALUES
(1, 'Business Registration', 'Plans for business registration and incorporation'),
(2, 'Annual Compliance', 'Plans for annual compliance services');

-- Insert plans
INSERT INTO plans (id, plan_name, description, is_active, suggestion_text, happy_text, category_id) VALUES
(1, 'Normal', 'Perfect for initiating company registration', TRUE, '', '', 1),
(2, 'Fastrack', 'Quick company registration in 7 to 14 days', TRUE, '', '', 1),
(3, 'Complete Suit', 'Top priority service + annual compliance to keep your business on track', TRUE, '', '', 1);

-- Insert plan pricing
INSERT INTO plan_pricing (plan_id, price, discount, after_discount, later_paid_amount, later_paid_text, later_paid_info_text, later_paid_info_link) VALUES
(1, NULL, NULL, '₹999', '', 'Govt. fees will be as per this website and will change according to states - PVT LTD Company Registration Online - Fast & Legal in India', '', ''),
(2, NULL, NULL, '₹1,999', '', 'Govt. fees will be as per this website and will change according to states PVT LTD Company Registration Online Fast & Legal in India', '', ''),
(3, NULL, NULL, '₹19,999', '', 'Govt. fees will be as per this website and will change according to states PVT LTD Company Registration Online Fast & Legal in India', '', '');

-- Insert plan features for Normal plan
INSERT INTO plan_features (plan_id, feature_text, feature_order) VALUES
(1, 'Expert assisted process', 1),
(1, 'Your company name is reserved in just 2 - 4 days', 2),
(1, 'Digital Signature Certificate (DSC) in 4-7 Days', 3),
(1, 'SPICe+ form filing in 14 days*', 4),
(1, 'Incorporation Certificate in 14 - 21 days', 5),
(1, 'Company PAN and TAN', 6),
(1, 'DIN for directors', 7),
(1, 'MOA and AOA Certificate', 8);

-- Insert plan features for Fastrack plan
INSERT INTO plan_features (plan_id, feature_text, feature_order) VALUES
(2, 'Expert assisted process', 1),
(2, 'Your company name is reserved in just 2 - 4 days', 2),
(2, 'Digital Signature Certificate (DSC) in 4-7 Days', 3),
(2, 'SPICe+ form filing in 14 days*', 4),
(2, 'Incorporation Certificate in 14 - 21 days', 5),
(2, 'Company PAN+TAN', 6),
(2, 'DIN for directors', 7),
(2, 'MOA and AOA Certificate', 8),
(2, 'Appointment of Auditor', 9),
(2, 'Issuance of share certificate', 10),
(2, 'INC 20 A form filing', 11);

-- Insert plan features for Complete Suit plan
INSERT INTO plan_features (plan_id, feature_text, feature_order) VALUES
(3, 'Expert assisted process', 1),
(3, 'Your company name is reserved in just 2 - 4 days*', 2),
(3, 'Digital Signature Certificate (DSC) in 3-4 Days', 3),
(3, 'SPICe+ Form Filing in 5-7 Days*', 4),
(3, 'Incorporation Certificate Issued in 7-14 Days', 5),
(3, 'Company PAN and TAN', 6),
(3, 'Director Identification Number (DIN)', 7),
(3, 'Appointment of Auditor', 8),
(3, 'Issuance of Share Certificates', 9),
(3, 'INC 20A Form Filing', 10),
(3, 'DIR 3 KYC for 2 Directors', 11),
(3, 'Accounting & Bookkeeping (Up to 100 Transactions)', 12),
(3, 'Financial Statement Preparation', 13),
(3, '1-Year License for Accounting Software', 14),
(3, 'Filing of AOC 4, MGT 7 & ADT 1', 15),
(3, 'Annual Filing (For Turnover Up to 20 Lakhs)', 16),
(3, 'Facilitation of Annual General Meeting', 17),
(3, 'Compliance with PF and ESI Statutory Regulations', 18),
(3, 'One-Year Income Tax Filing (For Turnover Up to 20 Lakhs)', 19),
(3, '30-Minute Consultation Call with a Senior CA/CS for Business Planning', 20);

-- Insert plan offers
INSERT INTO plan_offers (plan_id, image_url, is_active, heading, sub_heading, description, know_more_text, know_more_link) VALUES
(1, '', TRUE, 'offer', 'Unlock partner benefits Post', 'Post company incorporation worth Rs 4 lakhs', 'visit here to grab the offer', '');

-- Insert plan split payments
INSERT INTO plan_split_payments (plan_id, enabled, instalments, instalment_amount, text, know_more_text, know_more_link) VALUES
(1, FALSE, 2, '₹499.50', 'Split payment by 2 month with Zolvit Flex', '', ''),
(2, FALSE, 2, '749.50', 'Split payment by 2 month with Zolvit Flex', '', ''),
(3, FALSE, 3, '749.50', 'Split payment by 3 with Zolvit Flex', '', '');

-- Insert plan recommendations
INSERT INTO plan_recommendations (plan_id, recommended, text) VALUES
(1, TRUE, ''),
(2, TRUE, ''),
(3, TRUE, '');

-- Insert state plan mapping (which plans are available in which states)
INSERT INTO state_plan_mapping (state_code, plan_id) VALUES
('MP', 1),
('MP', 2),
('MP', 3),
('DL', 1),
('DL', 2),
('DL', 3);

-- ------------------------------------

-- Single table design for business plans data

CREATE TABLE business_plans (
    id INT AUTO_INCREMENT PRIMARY KEY,
    
    -- State information
    state_code VARCHAR(2) NOT NULL,
    state_name VARCHAR(100) NOT NULL,
    
    -- Plan basic information
    plan_name VARCHAR(50) NOT NULL,
    plan_description TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    suggestion_text TEXT,
    happy_text TEXT,
    
    -- Plan pricing information
    price VARCHAR(20),
    discount VARCHAR(20),
    after_discount VARCHAR(20) NOT NULL,
    later_paid_amount VARCHAR(20),
    later_paid_text TEXT,
    
    -- Offer information
    offer_image_url TEXT,
    offer_is_active BOOLEAN DEFAULT FALSE,
    offer_heading VARCHAR(100),
    offer_sub_heading TEXT,
    offer_description TEXT,
    offer_know_more_text TEXT,
    offer_know_more_link TEXT,
    
    -- Split payment information
    split_payment_enabled BOOLEAN DEFAULT FALSE,
    split_payment_instalments INT,
    split_payment_instalment_amount VARCHAR(20),
    split_payment_text TEXT,
    split_payment_know_more_text TEXT,
    split_payment_know_more_link TEXT,
    
    -- Recommendation information
    is_recommended BOOLEAN DEFAULT FALSE,
    recommendation_text TEXT,
    
    -- Feature information
    feature_list TEXT,  -- Storing features as JSON array as a text field
    
    -- Website config - duplicated in each row but necessary for single table design
    heading_start_text VARCHAR(100),
    heading_blue_text VARCHAR(100),
    heading_end_text VARCHAR(100),
    website_description TEXT,
    default_state VARCHAR(2),
    default_plan VARCHAR(50),
    
    -- Created date for record keeping
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert data for MP state Normal plan
INSERT INTO business_plans (
    state_code, 
    state_name, 
    plan_name, 
    plan_description, 
    is_active, 
    suggestion_text, 
    happy_text, 
    price, 
    discount, 
    after_discount, 
    later_paid_amount, 
    later_paid_text, 
    offer_image_url, 
    offer_is_active, 
    offer_heading, 
    offer_sub_heading, 
    offer_description, 
    offer_know_more_text, 
    offer_know_more_link, 
    split_payment_enabled, 
    split_payment_instalments, 
    split_payment_instalment_amount, 
    split_payment_text, 
    split_payment_know_more_text, 
    split_payment_know_more_link, 
    is_recommended, 
    recommendation_text, 
    feature_list, 
    heading_start_text, 
    heading_blue_text, 
    heading_end_text, 
    website_description, 
    default_state, 
    default_plan
) VALUES (
    'MP',
    'Madhya Pradesh',
    'Normal',
    'Perfect for initiating company registration',
    TRUE,
    '',
    '',
    '',
    '',
    '₹999',
    '',
    'Govt. fees will be as per this website and will change according to states - PVT LTD Company Registration Online - Fast & Legal in India',
    '',
    TRUE,
    'offer',
    'Unlock partner benefits Post',
    'Post company incorporation worth Rs 4 lakhs',
    'visit here to grab the offer',
    '',
    FALSE,
    2,
    '₹499.50',
    'Split payment by 2 month with Zolvit Flex',
    '',
    '',
    TRUE,
    '',
    '["Expert assisted process", "Your company name is reserved in just 2 - 4 days", "Digital Signature Certificate (DSC) in 4-7 Days", "SPICe+ form filing in 14 days*", "Incorporation Certificate in 14 - 21 days", "Company PAN and TAN", "DIN for directors", "MOA and AOA Certificate"]',
    'Pick the',
    ' Business Plan ',
    'for Your Goals',
    'Our Incorporation Expert\'s Know What is your Need',
    'MP',
    'Standard'
);

-- Insert data for MP state Fastrack plan
INSERT INTO business_plans (
    state_code, 
    state_name, 
    plan_name, 
    plan_description, 
    is_active, 
    suggestion_text, 
    happy_text, 
    price, 
    discount, 
    after_discount, 
    later_paid_amount, 
    later_paid_text, 
    offer_image_url, 
    offer_is_active, 
    offer_heading, 
    offer_sub_heading, 
    offer_description, 
    offer_know_more_text, 
    offer_know_more_link, 
    split_payment_enabled, 
    split_payment_instalments, 
    split_payment_instalment_amount, 
    split_payment_text, 
    split_payment_know_more_text, 
    split_payment_know_more_link, 
    is_recommended, 
    recommendation_text, 
    feature_list, 
    heading_start_text, 
    heading_blue_text, 
    heading_end_text, 
    website_description, 
    default_state, 
    default_plan
) VALUES (
    'MP',
    'Madhya Pradesh',
    'Fastrack',
    'Quick company registration in 7 to 14 days',
    TRUE,
    '',
    '',
    '',
    '',
    '₹1,999',
    '',
    'Govt. fees will be as per this website and will change according to states PVT LTD Company Registration Online Fast & Legal in India',
    '',
    FALSE,
    '',
    'Unlock partner benefits Post',
    'Post company incorporation worth Rs 4 lakhs',
    '',
    '',
    FALSE,
    2,
    '749.50',
    'Split payment by 2 month with Zolvit Flex',
    '',
    '',
    TRUE,
    '',
    '["Expert assisted process", "Your company name is reserved in just 2 - 4 days", "Digital Signature Certificate (DSC) in 4-7 Days", "SPICe+ form filing in 14 days*", "Incorporation Certificate in 14 - 21 days", "Company PAN+TAN", "DIN for directors", "MOA and AOA Certificate", "Appointment of Auditor", "Issuance of share certificate", "INC 20 A form filing"]',
    'Pick the',
    ' Business Plan ',
    'for Your Goals',
    'Our Incorporation Expert\'s Know What is your Need',
    'MP',
    'Standard'
);

-- Insert data for MP state Complete Suit plan
INSERT INTO business_plans (
    state_code, 
    state_name, 
    plan_name, 
    plan_description, 
    is_active, 
    suggestion_text, 
    happy_text, 
    price, 
    discount, 
    after_discount, 
    later_paid_amount, 
    later_paid_text, 
    offer_image_url, 
    offer_is_active, 
    offer_heading, 
    offer_sub_heading, 
    offer_description, 
    offer_know_more_text, 
    offer_know_more_link, 
    split_payment_enabled, 
    split_payment_instalments, 
    split_payment_instalment_amount, 
    split_payment_text, 
    split_payment_know_more_text, 
    split_payment_know_more_link, 
    is_recommended, 
    recommendation_text, 
    feature_list, 
    heading_start_text, 
    heading_blue_text, 
    heading_end_text, 
    website_description, 
    default_state, 
    default_plan
) VALUES (
    'MP',
    'Madhya Pradesh',
    'Complete Suit',
    'Top priority service + annual compliance to keep your business on track',
    TRUE,
    '',
    '',
    '',
    '',
    '₹19,999',
    '',
    'Govt. fees will be as per this website and will change according to states PVT LTD Company Registration Online Fast & Legal in India',
    '',
    FALSE,
    '',
    'Unlock partner benefits Post',
    'Post company incorporation worth Rs 4 lakhs',
    '',
    '',
    FALSE,
    3,
    '749.50',
    'Split payment by 3 with Zolvit Flex',
    '',
    '',
    TRUE,
    '',
    '["Expert assisted process", "Your company name is reserved in just 2 - 4 days*", "Digital Signature Certificate (DSC) in 3-4 Days", "SPICe+ Form Filing in 5-7 Days*", "Incorporation Certificate Issued in 7-14 Days", "Company PAN and TAN", "Director Identification Number (DIN)", "Appointment of Auditor", "Issuance of Share Certificates", "INC 20A Form Filing", "DIR 3 KYC for 2 Directors", "Accounting & Bookkeeping (Up to 100 Transactions)", "Financial Statement Preparation", "1-Year License for Accounting Software", "Filing of AOC 4, MGT 7 & ADT 1", "Annual Filing (For Turnover Up to 20 Lakhs)", "Facilitation of Annual General Meeting", "Compliance with PF and ESI Statutory Regulations", "One-Year Income Tax Filing (For Turnover Up to 20 Lakhs)", "30-Minute Consultation Call with a Senior CA/CS for Business Planning"]',
    'Pick the',
    ' Business Plan ',
    'for Your Goals',
    'Our Incorporation Expert\'s Know What is your Need',
    'MP',
    'Standard'
);

-- Insert data for DL state Normal plan
INSERT INTO business_plans (
    state_code, 
    state_name, 
    plan_name, 
    plan_description, 
    is_active, 
    suggestion_text, 
    happy_text, 
    price, 
    discount, 
    after_discount, 
    later_paid_amount, 
    later_paid_text, 
    offer_image_url, 
    offer_is_active, 
    offer_heading, 
    offer_sub_heading, 
    offer_description, 
    offer_know_more_text, 
    offer_know_more_link, 
    split_payment_enabled, 
    split_payment_instalments, 
    split_payment_instalment_amount, 
    split_payment_text, 
    split_payment_know_more_text, 
    split_payment_know_more_link, 
    is_recommended, 
    recommendation_text, 
    feature_list, 
    heading_start_text, 
    heading_blue_text, 
    heading_end_text, 
    website_description, 
    default_state, 
    default_plan
) VALUES (
    'DL',
    'Delhi',
    'Normal',
    'Perfect for initiating company registration',
    TRUE,
    '',
    '',
    '',
    '',
    '₹999',
    '',
    'Govt. fees will be as per this website and will change according to states - PVT LTD Company Registration Online - Fast & Legal in India',
    '',
    TRUE,
    'offer',
    'Unlock partner benefits Post',
    'Post company incorporation worth Rs 4 lakhs',
    'visit here to grab the offer',
    '',
    FALSE,
    2,
    '₹499.50',
    'Split payment by 2 month with Zolvit Flex',
    '',
    '',
    TRUE,
    '',
    '["Expert assisted process", "Your company name is reserved in just 2 - 4 days", "Digital Signature Certificate (DSC) in 4-7 Days", "SPICe+ form filing in 14 days*", "Incorporation Certificate in 14 - 21 days", "Company PAN and TAN", "DIN for directors", "MOA and AOA Certificate"]',
    'Pick the',
    ' Business Plan ',
    'for Your Goals',
    'Our Incorporation Expert\'s Know What is your Need',
    'MP',
    'Standard'
);

-- Insert data for DL state Fastrack plan
INSERT INTO business_plans (
    state_code, 
    state_name, 
    plan_name, 
    plan_description, 
    is_active, 
    suggestion_text, 
    happy_text, 
    price, 
    discount, 
    after_discount, 
    later_paid_amount, 
    later_paid_text, 
    offer_image_url, 
    offer_is_active, 
    offer_heading, 
    offer_sub_heading, 
    offer_description, 
    offer_know_more_text, 
    offer_know_more_link, 
    split_payment_enabled, 
    split_payment_instalments, 
    split_payment_instalment_amount, 
    split_payment_text, 
    split_payment_know_more_text, 
    split_payment_know_more_link, 
    is_recommended, 
    recommendation_text, 
    feature_list, 
    heading_start_text, 
    heading_blue_text, 
    heading_end_text, 
    website_description, 
    default_state, 
    default_plan
) VALUES (
    'DL',
    'Delhi',
    'Fastrack',
    'Quick company registration in 7 to 14 days',
    TRUE,
    '',
    '',
    '',
    '',
    '₹1,999',
    '',
    'Govt. fees will be as per this website and will change according to states PVT LTD Company Registration Online Fast & Legal in India',
    '',
    FALSE,
    '',
    'Unlock partner benefits Post',
    'Post company incorporation worth Rs 4 lakhs',
    '',
    '',
    FALSE,
    2,
    '749.50',
    'Split payment by 2 month with Zolvit Flex',
    '',
    '',
    TRUE,
    '',
    '["Expert assisted process", "Your company name is reserved in just 2 - 4 days", "Digital Signature Certificate (DSC) in 4-7 Days", "SPICe+ form filing in 14 days*", "Incorporation Certificate in 14 - 21 days", "Company PAN+TAN", "DIN for directors", "MOA and AOA Certificate", "Appointment of Auditor", "Issuance of share certificate", "INC 20 A form filing"]',
    'Pick the',
    ' Business Plan ',
    'for Your Goals',
    'Our Incorporation Expert\'s Know What is your Need',
    'MP',
    'Standard'
);

-- Insert data for DL state Complete Suit plan
INSERT INTO business_plans (
    state_code, 
    state_name, 
    plan_name, 
    plan_description, 
    is_active, 
    suggestion_text, 
    happy_text, 
    price, 
    discount, 
    after_discount, 
    later_paid_amount, 
    later_paid_text, 
    offer_image_url, 
    offer_is_active, 
    offer_heading, 
    offer_sub_heading, 
    offer_description, 
    offer_know_more_text, 
    offer_know_more_link, 
    split_payment_enabled, 
    split_payment_instalments, 
    split_payment_instalment_amount, 
    split_payment_text, 
    split_payment_know_more_text, 
    split_payment_know_more_link, 
    is_recommended, 
    recommendation_text, 
    feature_list, 
    heading_start_text, 
    heading_blue_text, 
    heading_end_text, 
    website_description, 
    default_state, 
    default_plan
) VALUES (
    'DL',
    'Delhi',
    'Complete Suit',
    'Top priority service + annual compliance to keep your business on track',
    TRUE,
    '',
    '',
    '',
    '',
    '₹19,999',
    '',
    'Govt. fees will be as per this website and will change according to states PVT LTD Company Registration Online Fast & Legal in India',
    '',
    FALSE,
    '',
    'Unlock partner benefits Post',
    'Post company incorporation worth Rs 4 lakhs',
    '',
    '',
    FALSE,
    3,
    '749.50',
    'Split payment by 3 with Zolvit Flex',
    '',
    '',
    TRUE,
    '',
    '["Expert assisted process", "Your company name is reserved in just 2 - 4 days*", "Digital Signature Certificate (DSC) in 3-4 Days", "SPICe+ Form Filing in 5-7 Days*", "Incorporation Certificate Issued in 7-14 Days", "Company PAN and TAN", "Director Identification Number (DIN)", "Appointment of Auditor", "Issuance of Share Certificates", "INC 20A Form Filing", "DIR 3 KYC for 2 Directors", "Accounting & Bookkeeping (Up to 100 Transactions)", "Financial Statement Preparation", "1-Year License for Accounting Software", "Filing of AOC 4, MGT 7 & ADT 1", "Annual Filing (For Turnover Up to 20 Lakhs)", "Facilitation of Annual General Meeting", "Compliance with PF and ESI Statutory Regulations", "One-Year Income Tax Filing (For Turnover Up to 20 Lakhs)", "30-Minute Consultation Call with a Senior CA/CS for Business Planning"]',
    'Pick the',
    ' Business Plan ',
    'for Your Goals',
    'Our Incorporation Expert\'s Know What is your Need',
    'MP',
    'Standard'
);

-- Insert additional states from the statesOptions array
-- Note: These are just state records without plan data
INSERT INTO business_plans (
    state_code, 
    state_name, 
    plan_name, 
    plan_description, 
    is_active, 
    after_discount,
    heading_start_text, 
    heading_blue_text, 
    heading_end_text, 
    website_description, 
    default_state, 
    default_plan
) VALUES
('AP', 'Andhra Pradesh', 'State Only', 'State record only', FALSE, '₹0', 'Pick the', ' Business Plan ', 'for Your Goals', 'Our Incorporation Expert\'s Know What is your Need', 'MP', 'Standard'),
('AR', 'Arunachal Pradesh', 'State Only', 'State record only', FALSE, '₹0', 'Pick the', ' Business Plan ', 'for Your Goals', 'Our Incorporation Expert\'s Know What is your Need', 'MP', 'Standard'),
('AS', 'Assam', 'State Only', 'State record only', FALSE, '₹0', 'Pick the', ' Business Plan ', 'for Your Goals', 'Our Incorporation Expert\'s Know What is your Need', 'MP', 'Standard'),
('BR', 'Bihar', 'State Only', 'State record only', FALSE, '₹0', 'Pick the', ' Business Plan ', 'for Your Goals', 'Our Incorporation Expert\'s Know What is your Need', 'MP', 'Standard'),
('CG', 'Chhattisgarh', 'State Only', 'State record only', FALSE, '₹0', 'Pick the', ' Business Plan ', 'for Your Goals', 'Our Incorporation Expert\'s Know What is your Need', 'MP', 'Standard'),
('GA', 'Goa', 'State Only', 'State record only', FALSE, '₹0', 'Pick the', ' Business Plan ', 'for Your Goals', 'Our Incorporation Expert\'s Know What is your Need', 'MP', 'Standard'),
('GJ', 'Gujarat', 'State Only', 'State record only', FALSE, '₹0', 'Pick the', ' Business Plan ', 'for Your Goals', 'Our Incorporation Expert\'s Know What is your Need', 'MP', 'Standard'),
('HR', 'Haryana', 'State Only', 'State record only', FALSE, '₹0', 'Pick the', ' Business Plan ', 'for Your Goals', 'Our Incorporation Expert\'s Know What is your Need', 'MP', 'Standard'),
('HP', 'Himachal Pradesh', 'State Only', 'State record only', FALSE, '₹0', 'Pick the', ' Business Plan ', 'for Your Goals', 'Our Incorporation Expert\'s Know What is your Need', 'MP', 'Standard'),
('JK', 'Jammu and Kashmir', 'State Only', 'State record only', FALSE, '₹0', 'Pick the', ' Business Plan ', 'for Your Goals', 'Our Incorporation Expert\'s Know What is your Need', 'MP', 'Standard'),
('JH', 'Jharkhand', 'State Only', 'State record only', FALSE, '₹0', 'Pick the', ' Business Plan ', 'for Your Goals', 'Our Incorporation Expert\'s Know What is your Need', 'MP', 'Standard'),
('KA', 'Karnataka', 'State Only', 'State record only', FALSE, '₹0', 'Pick the', ' Business Plan ', 'for Your Goals', 'Our Incorporation Expert\'s Know What is your Need', 'MP', 'Standard'),
('KL', 'Kerala', 'State Only', 'State record only', FALSE, '₹0', 'Pick the', ' Business Plan ', 'for Your Goals', 'Our Incorporation Expert\'s Know What is your Need', 'MP', 'Standard'),
('MH', 'Maharashtra', 'State Only', 'State record only', FALSE, '₹0', 'Pick the', ' Business Plan ', 'for Your Goals', 'Our Incorporation Expert\'s Know What is your Need', 'MP', 'Standard'),
('MN', 'Manipur', 'State Only', 'State record only', FALSE, '₹0', 'Pick the', ' Business Plan ', 'for Your Goals', 'Our Incorporation Expert\'s Know What is your Need', 'MP', 'Standard'),
('ML', 'Meghalaya', 'State Only', 'State record only', FALSE, '₹0', 'Pick the', ' Business Plan ', 'for Your Goals', 'Our Incorporation Expert\'s Know What is your Need', 'MP', 'Standard'),
('MZ', 'Mizoram', 'State Only', 'State record only', FALSE, '₹0', 'Pick the', ' Business Plan ', 'for Your Goals', 'Our Incorporation Expert\'s Know What is your Need', 'MP', 'Standard'),
('NL', 'Nagaland', 'State Only', 'State record only', FALSE, '₹0', 'Pick the', ' Business Plan ', 'for Your Goals', 'Our Incorporation Expert\'s Know What is your Need', 'MP', 'Standard'),
('OD', 'Odisha', 'State Only', 'State record only', FALSE, '₹0', 'Pick the', ' Business Plan ', 'for Your Goals', 'Our Incorporation Expert\'s Know What is your Need', 'MP', 'Standard'),
('PB', 'Punjab', 'State Only', 'State record only', FALSE, '₹0', 'Pick the', ' Business Plan ', 'for Your Goals', 'Our Incorporation Expert\'s Know What is your Need', 'MP', 'Standard'),
('RJ', 'Rajasthan', 'State Only', 'State record only', FALSE, '₹0', 'Pick the', ' Business Plan ', 'for Your Goals', 'Our Incorporation Expert\'s Know What is your Need', 'MP', 'Standard'),
('SK', 'Sikkim', 'State Only', 'State record only', FALSE, '₹0', 'Pick the', ' Business Plan ', 'for Your Goals', 'Our Incorporation Expert\'s Know What is your Need', 'MP', 'Standard'),
('TN', 'T amil Nadu', 'State Only', 'State record only', FALSE, '₹0', 'Pick the', ' Business Plan ', 'for Your Goals', 'Our Incorporation Expert\'s Know What is your Need', 'MP', 'Standard'),
('TG', 'Telangana', 'State Only', 'State record only', FALSE, '₹0', 'Pick the', ' Business Plan ', 'for Your Goals', 'Our Incorporation Expert\'s Know What is your Need', 'MP', 'Standard'),
('TR', 'Tripura', 'State Only', 'State record only', FALSE, '₹0', 'Pick the', ' Business Plan ', 'for Your Goals', 'Our Incorporation Expert\'s Know What is your Need', 'MP', 'Standard'),
('UP', 'Uttar Pradesh', 'State Only', 'State record only', FALSE, '₹0', 'Pick the', ' Business Plan ', 'for Your Goals', 'Our Incorporation Expert\'s Know What is your Need', 'MP', 'Standard'),
('UT', 'Uttarakhand', 'State Only', 'State record only', FALSE, '₹0', 'Pick the', ' Business Plan ', 'for Your Goals', 'Our Incorporation Expert\'s Know What is your Need', 'MP', 'Standard'),
('WB', 'West Bengal', 'State Only', 'State record only', FALSE, '₹0', 'Pick the', ' Business Plan ', 'for Your Goals', 'Our Incorporation Expert\'s Know What is your Need', 'MP', 'Standard'),
('AN', 'Andaman and Nicobar Islands', 'State Only', 'State record only', FALSE, '₹0', 'Pick the', ' Business Plan ', 'for Your Goals', 'Our Incorporation Expert\'s Know What is your Need', 'MP', 'Standard'),
('CH', 'Chandigarh', 'State Only', 'State record only', FALSE, '₹0', 'Pick the', ' Business Plan ', 'for Your Goals', 'Our Incorporation Expert\'s Know What is your Need', 'MP', 'Standard'),
('DN', 'Dadra and Nagar Haveli', 'State Only', 'State record only', FALSE, '₹0', 'Pick the', ' Business Plan ', 'for Your Goals', 'Our Incorporation Expert\'s Know What is your Need', 'MP', 'Standard'),
('DD', 'Daman and Diu', 'State Only', 'State record only', FALSE, '₹0', 'Pick the', ' Business Plan ', 'for Your Goals', 'Our Incorporation Expert\'s Know What is your Need', 'MP', 'Standard'),
('LD', 'Lakshadweep', 'State Only', 'State record only', FALSE, '₹0', 'Pick the', ' Business Plan ', 'for Your Goals', 'Our Incorporation Expert\'s Know What is your Need', 'MP', 'Standard'),
('PY', 'Puducherry', 'State Only', 'State record only', FALSE, '₹0', 'Pick the', ' Business Plan ', 'for Your Goals', 'Our Incorporation Expert\'s Know What is your Need', 'MP', 'Standard');




-- -------------------------------------
CREATE TABLE IF NOT EXISTS orders (
    id INT AUTO_INCREMENT PRIMARY KEY,

    -- 🔹 Customer Info
    customer_name VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    phone VARCHAR(20),
    address TEXT,

    -- 🔹 Order Items & Total
    items JSON, -- use JSON for better structure
    total DECIMAL(10, 2),

    -- 🔹 Payment Info (Your status + CCAvenue)
    payment_status ENUM('pending', 'completed', 'failed') DEFAULT 'pending',

    -- 🔹 CCAvenue Return Fields
    order_id VARCHAR(100),
    tracking_id VARCHAR(100),
    bank_ref_no VARCHAR(100),
    order_status VARCHAR(20),  -- Success / Failure / Aborted / Invalid
    payment_mode VARCHAR(50),
    card_name VARCHAR(50),
    currency VARCHAR(10),
    amount DECIMAL(10,2),
    billing_name VARCHAR(100),
    billing_email VARCHAR(100),
    billing_tel VARCHAR(20),
    merchant_param1 VARCHAR(255),
    merchant_param2 VARCHAR(255),
    merchant_param3 VARCHAR(255),
    merchant_param4 VARCHAR(255),
    merchant_param5 VARCHAR(255),
    status_message TEXT,
    trans_date DATETIME,
    checksum TEXT,

    -- 🔹 Timestamps
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
