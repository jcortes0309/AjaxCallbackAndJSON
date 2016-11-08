CREATE TABLE website (
  id serial primary key,
  title varchar NOT NULL,
  url varchar NOT NULL UNIQUE
);
