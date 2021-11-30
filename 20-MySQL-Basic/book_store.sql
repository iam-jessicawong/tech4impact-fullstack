-- Show DB --
SHOW DATABASES;

-- Create DB --
CREATE DATABASE bookstore;

-- Use DB --
USE bookstore;

-- SHOW Table --
SHOW TABLES;

-- CREATE TABLE --
CREATE TABLE books(
  id INT AUTO_INCREMENT PRIMARY KEY,
  author1 VARCHAR(100) NOT NULL,
  author2 VARCHAR(100),
  author3 VARCHAR(100),
  title VARCHAR(100),
  description TEXT,
  place_sell CHAR(3),
  stock INT DEFAULT 0,
  creation_date DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- UPDATE COLUMN --
ALTER TABLE books
ADD price INT DEFAULT 0,
ADD status ENUM('available', 'out of stock', 'limited'),
DROP COLUMN place_sell;

-- INSERT DATA --
INSERT INTO books VALUES
('', 'Gabriel Garcia', 'Marquez', '', 'The General in His Labyrinth', 'The General in His Labyrinth is a 1989 dictator novel by Colombian writer Gabriel García Márquez. It is a fictionalized account of the last seven months of Simón Bolívar, liberator and leader of Gran Colombia.', 100, DEFAULT, 113000, 'available'),
('', 'James Dashner', '', '', 'The Maze Runner Set', 'The Maze Runner is a series of young adult dystopian science fiction novels written by American author James Dashner', '', '2016-09-16', 500000, 'out of stock'),
('', 'Haemin', 'John Marrs', 'John Grisham', 'Love for Imperfect Things', 'A #1 internationally bestselling book of spiritual wisdom about learning to love ourselves, with all our imperfections.', 10, DEFAULT, 200000, 'limited'),
('', 'John Connolly', 'John Marrs', 'Matt Haig', 'The Book of Lost Things', "A young adult novel focusing on a young boy's quest to fit in his earthly world and survive in his fantasy world in 1940's England.", 100, DEFAULT, 100000, 'available');


-- SELECT BOOKS --
SELECT * FROM books;

-- SELECT ALIAS --
SELECT id AS ID, author1 AS A1, author2 AS A2, author3 AS A3 FROM books;

-- SELECT WITH COMMON ID --
SELECT * FROM books WHERE id = 2;

-- SELECT WITH AND --
SELECT * FROM books WHERE price > 100000 AND price <= 200000;

-- SELECT WITH OR --
SELECT * FROM books WHERE status = 'limited' OR status = 'out of stock';

-- SELECT WITH NOT --
SELECT * FROM books WHERE author2 != 'John Marrs';

-- ORDER BY --
SELECT * FROM books ORDER BY id ASC;

-- LIMIT --
SELECT * FROM books LIMIT 2;

-- UPDATE DATA --
UPDATE books SET author1 = 'Haemin Sunim', price = 190000 WHERE id = 3;

-- DELETE DATA --
DELETE FROM books WHERE id = 1;