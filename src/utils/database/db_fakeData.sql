--mysql -u blog_admin -p blog_kelaasor < db_fakeData.sql
INSERT INTO blogs 
(slug, active, author, title, content, banner, description, meta_description, category) VALUES 
('slg1',0,'mamad mamadi','this is title','content','http://localhost:3000/uploads/1726903033852-file','descri','metaaaa','design'),
('slg2',0,'mamad mamadi','this is title','content','http://localhost:3000/uploads/1726903033852-file','descri','metaaaa','design'),
('slg3',0,'mamad mamadi','this is title','content','http://localhost:3000/uploads/1726903033852-file','descri','metaaaa','design'),
('slg4',0,'mamad mamadi','this is title','content','http://localhost:3000/uploads/1726903033852-file','descri','metaaaa','design')
;
