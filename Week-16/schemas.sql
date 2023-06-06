CREATE DATABASE warehouse;
USE warehouse;

-- Table creation queries

-- Creating Cities table
CREATE TABLE CITIES(
	CITY_ID CHAR(5) PRIMARY KEY NOT NULL,
	CITY_NAME CHAR(20) NOT NULL,
    STATE CHAR(20) NOT NULL
);

-- Creating Warehouse table
CREATE TABLE WAREHOUSES(
	WID INT PRIMARY KEY NOT NULL,
    WNAME CHAR(30) NOT NULL,
    LOCATION CHAR(20) NOT NULL,
    EXTRA_CONTEXT JSON,
    FOREIGN KEY (LOCATION) REFERENCES CITIES(CITY_ID)
);

-- Creating Stores table
CREATE TABLE STORES(
	SID INT PRIMARY KEY NOT NULL,
    STORE_NAME CHAR(20) NOT NULL,
    CITY CHAR(20) NOT NULL,
    WID INT NOT NULL,
    FOREIGN KEY (WID) REFERENCES WAREHOUSES(WID)
);

-- Creating Customer table
CREATE TABLE CUSTOMER(
	CUSTOMER_ID INT PRIMARY KEY NOT NULL,
    CNAME CHAR(50) NOT NULL,
    ADDRESS VARCHAR(50) NOT NULL,
    CITY CHAR(20) NOT NULL
);

-- Creating Orders table
CREATE TABLE ORDERS(
	OID INT PRIMARY KEY NOT NULL,
    ODATE DATE NOT NULL
);

-- Creating Items table
CREATE TABLE ITEMS(
	ITEMID INT PRIMARY KEY NOT NULL,
    DESCTEXT VARCHAR(50),
    WEIGHT DECIMAL(5,2) NOT NULL,
    COST DECIMAL(5,2) NOT NULL
);

-- Creating Order_Details table
CREATE TABLE ORDER_DETAILS(
	ORDER_DETAILID INT PRIMARY KEY NOT NULL,
    CUSTOMER_ID INT,
    ITEM_QUANTITY INT,
    OID INT NOT NULL,
    ITEMID INT NOT NULL,
    FOREIGN KEY (CUSTOMER_ID) REFERENCES CUSTOMER(CUSTOMER_ID),
    FOREIGN KEY (OID) REFERENCES ORDERS(OID),
    FOREIGN KEY (ITEMID) REFERENCES ITEMS(ITEMID)   
);

-- Creating Stock table
CREATE TABLE STOCK(
	STOCK_ID INT PRIMARY KEY NOT NULL,
    ITEMID INT NOT NULL,
    SID INT NOT NULL,
    QUANTITY INT DEFAULT 0,
    STOCK_DATE DATE,
    FOREIGN KEY (ITEMID) REFERENCES ITEMS(ITEMID),
	FOREIGN KEY (SID) REFERENCES STORES(SID)
);

-- Data Insertion queries

-- Inserting items into Cities Table
INSERT INTO CITIES VALUES
('MUM', 'Mumbai', 'Maharashtra'),
('DEL', 'Delhi', 'Delhi'),
('CHN', 'Chennai', 'Tamil Nadu'),
('KOL', 'Kolkata', 'West Bengal'),
('HYD', 'Hyderabad', 'Telangana'),
('BNG', 'Bangalore', 'Karnataka'),
('PUN', 'Pune', 'Maharashtra'),
('AHM', 'Ahmedabad', 'Gujarat'),
('LKO', 'Lucknow', 'Uttar Pradesh'),
('JAI', 'Jaipur', 'Rajasthan');

-- Inserting items into Warehouse table
INSERT INTO WAREHOUSES VALUES
(1, 'Mumbai Warehouse', 'MUM', '{ "country": "India", "state": "Maharashtra", "city": "Mumbai" }'),
(2, 'Delhi Warehouse', 'DEL', '{ "country": "India", "state": "Delhi", "city": "Delhi" }'),
(3, 'Chennai Warehouse', 'CHN', '{ "country": "India", "state": "Tamil Nadu", "city": "Chennai" }'),
(4, 'Kolkata Warehouse', 'KOL', '{ "country": "India", "state": "West Bengal", "city": "Kolkata" }'),
(5, 'Hyderabad Warehouse', 'HYD', '{ "country": "India", "state": "Telangana", "city": "Hyderabad" }'),
(6, 'Bangalore Warehouse', 'BNG', '{ "country": "India", "state": "Karnataka", "city": "Bangalore" }'),
(7, 'Pune Warehouse', 'PUN', '{ "country": "India", "state": "Maharashtra", "city": "Pune" }'),
(8, 'Ahmedabad Warehouse', 'AHM', '{ "country": "India", "state": "Gujarat", "city": "Ahmedabad" }'),
(9, 'Lucknow Warehouse', 'LKO', '{ "country": "India", "state": "Uttar Pradesh", "city": "Lucknow" }'),
(10, 'Jaipur Warehouse', 'JAI', '{ "country": "India", "state": "Rajasthan", "city": "Jaipur" }');


-- Inserting items into Stores table
INSERT INTO STORES VALUES
(1, 'Reliance Digital', 'Mumbai', 1),
(2, 'Croma', 'Delhi', 2),
(3, 'Vijay Sales', 'Bangalore', 3),
(4, 'Future Group', 'Hyderabad', 4),
(5, 'More', 'Chennai', 5),
(6, 'D-Mart', 'Kolkata', 6),
(7, "Spencer's", 'Ahmedabad', 7),
(8, 'Max Hypermarket', 'Pune', 8),
(9, 'Big Bazaar', 'Lucknow', 9),
(10, 'Aditya Birla Retail', 'Jaipur', 10),
(11, 'Fresh Digital', 'Delhi', 2);

-- Inserting items into Customer table
INSERT INTO CUSTOMER VALUES
(1, 'Amit Kumar', '123 Main Street, Mumbai', 'Mumbai'),
(2, 'Rohan Singh', '456 High Street, Delhi', 'Delhi'),
(3, 'Sahil Sharma', '789 Park Avenue, Bangalore', 'Bangalore'),
(4, 'Tanmay Gupta', '1010 First Avenue, Hyderabad', 'Hyderabad'),
(5, 'Aditya Arora', '1111 Second Avenue, Chennai', 'Chennai'),
(6, 'Harshvardhan Kapoor', '2222 Third Avenue, Kolkata', 'Kolkata'),
(7, 'Rishabh Jain', '3333 Fourth Avenue, Ahmedabad', 'Ahmedabad'),
(8, 'Dhruv Patel', '4444 Fifth Avenue, Pune', 'Pune'),
(9, 'Suryakant Yadav', '5555 Sixth Avenue, Lucknow', 'Lucknow'),
(10, 'Abhishek Singhania', '6666 Seventh Avenue, Jaipur', 'Jaipur');

-- Inserting items into Orders table
INSERT INTO ORDERS VALUES
(1, '2023-05-01'),
(2, '2023-05-02'),
(3, '2023-05-03'),
(4, '2023-05-04'),
(5, '2023-05-05'),
(6, '2023-05-06'),
(7, '2023-05-07'),
(8, '2023-05-08'),
(9, '2023-05-09'),
(10, '2023-05-10');

-- Inserting items into Items table
INSERT INTO ITEMS VALUES
(1, 'Pencil', 0.10, 0.50),
(2, 'Notebook', 0.50, 2.00),
(3, 'Eraser', 0.05, 0.25),
(4, 'Highlighter', 0.75, 3.50),
(5, 'Ruler', 0.25, 1.00),
(6, 'Tissue Box', 1.00, 5.00),
(7, 'Stapler', 1.50, 7.50),
(8, 'Glue Stick', 0.50, 2.50),
(9, 'Paper Clips', 0.10, 0.50),
(10, 'Binder Clips', 0.25, 1.00);

-- Inserting items into Order Details table
INSERT INTO ORDER_DETAILS VALUES 
(1, 1, 1, 2, 4),
(2, 1, 2, 2, 5),
(3, 1, 3, 2, 6),
(4, 4, 4, 4, 4),
(5, 5, 5, 5, 5),
(6, 6, 6, 6, 6),
(7, 7, 7, 7, 7),
(8, 8, 8, 8, 8),
(9, 9, 9, 9, 9),
(10, 10, 10, 10, 10);

-- Inserting items into Stock table
INSERT INTO STOCK VALUES 
(1, 1, 1, 100, '2023-05-15'),
(2, 2, 2, 200, '2023-05-16'),
(3, 3, 3, 300, '2023-05-17'),
(4, 4, 4, 400, '2023-05-18'),
(5, 5, 5, 500, '2023-05-19'),
(6, 6, 6, 600, '2023-05-20'),
(7, 7, 7, 700, '2023-05-21'),
(8, 8, 8, 800, '2023-05-22'),
(9, 9, 9, 900, '2023-05-23'),
(10, 10, 10, 1000, '2023-05-24');