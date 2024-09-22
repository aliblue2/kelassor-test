--mysql -u blog_admin -p blog_kelaasor < db_initiate.sql

CREATE TABLE blogs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  slug VARCHAR(255) NOT NULL UNIQUE,
  active INT DEFAULT 0,
  author VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  banner VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  meta_description TEXT NOT NULL,
  category VARCHAR(255) NOT NULL,
  view_count INT DEFAULT 0,
  like_count INT DEFAULT 0,
  dislike_count INT DEFAULT 0,
  instagram_share_count INT DEFAULT 0,
  x_share_count INT DEFAULT 0,
  linkedin_share_count INT DEFAULT 0,
  telegram_share_count INT DEFAULT 0,
  whatsapp_share_count INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE categories (
  name VARCHAR(255) NOT NULL,
  tag VARCHAR(255) NOT NULL UNIQUE PRIMARY KEY
);
CREATE TABLE comments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  blogId INT NOT NULL,
  author VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  email VARCHAR(255),
  replyId INT,
  FOREIGN KEY (blogId) REFERENCES blogs(id)
  FOREIGN KEY (replyId) REFERENCES comments(id)
)
