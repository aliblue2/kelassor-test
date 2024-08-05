--mysql -u blog_admin -p blog_kelaasor < db_initiate.sql
CREATE TABLE blogs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  slug VARCHAR(255) NOT NULL UNIQUE,
  title VARCHAR(255) NOT NULL,
  category VARCHAR(16) NOT NULL,
  content TEXT NOT NULL,
  view INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
