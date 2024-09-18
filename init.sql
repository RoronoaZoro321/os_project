-- init.sql
CREATE TABLE patients (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INTEGER NOT NULL,
    gender VARCHAR(10) NOT NULL
);

INSERT INTO patients (name, age, gender) VALUES
    ('John Doe', 35, 'Male'),
    ('Jane Smith', 28, 'Female'),
    ('Bob Johnson', 45, 'Male');