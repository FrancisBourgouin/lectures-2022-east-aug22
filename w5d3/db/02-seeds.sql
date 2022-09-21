INSERT INTO authors (id, name, description, funny) VALUES (1,'Francis', 'Oh boy, he is a teacher', TRUE);
INSERT INTO authors (id, name, funny, description) VALUES (2,'Paul', TRUE, 'A student in march01');
INSERT INTO authors (id, name, funny, description) VALUES (3,'Mike', TRUE, 'A student in march01');
INSERT INTO authors (id, name, funny, description) VALUES (4,'Grigor', TRUE, 'A student in march29');
INSERT INTO authors (id, name, funny, description) VALUES (5,'Zack', TRUE, 'A student in march29');
INSERT INTO authors (id, name, funny, description) VALUES (6,'Anton', TRUE, 'A student in july 19');
INSERT INTO authors (id, name, funny, description) VALUES (7,'Aphy', TRUE, 'A student in july 19');
INSERT INTO authors (id, name, funny, description) VALUES (8,'Alex', TRUE, 'A student in july 19');
INSERT INTO authors (id, name, funny, description) VALUES (9,'Dusty', TRUE, 'A student in nov 22');
INSERT INTO authors (id, name, funny, description) VALUES (10,'Olga', TRUE, 'A student in nov 22');
INSERT INTO authors (id, name, funny, description) VALUES (11,'Luciana', TRUE, 'A student in nov 22');

INSERT INTO
  jokes (question, answer, rating, author_id)
VALUES
  ('Knock knock, whos there, to who', 'no, to whom',3, 1),
  ('How is a bouncer at a club like a dish soap?', 'They both DETER GENTS', 5, 2),
  ('What do you call a belt made out of watches?', 'A waist of time.', 5, 3),
  ('Why do programmers mix hallowen and christmas', 'because OCT 31 === DEC 25',5, 1),
  ('You know you should knock on your fridge door before opening it', 'There might by a salad dressing',5, 4),
  ('Why did the chicken cross the road?', 'Because there was a green light',4.46, 7),
  ('What is small, green and goes up and down?', 'A green pea in an elevator',4.46, null),
  ('Did you hear about the monkeys who shared an Amazon account?', 'They were Prime mates.',4, 6),
  ('Did you recognize that 2022 sound like 2020 too', NULL ,3, 10),
  ('What do you call a fly without wings?', 'A walk',5, 9),
  ('What do you call a bear with no teeth?', 'A Gummy Bear',4, 11);