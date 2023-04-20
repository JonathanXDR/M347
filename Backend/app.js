const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

console.log(process.env.DB_HOST,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  process.env.DB_NAME);

setTimeout(() => {
  // create database connection
  const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  // connect to database
  db.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
  });

  const app = express();
  const port = 3000;

  app.use(bodyParser.json());

  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  // HTTP endpoint to get all users from the database
  app.get('/tasks', (req, res) => {
    db.query('SELECT * FROM Tasks', (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });

  app.get('/tasks/:id', (req, res) => {
    db.query(
      'SELECT * FROM Tasks WHERE id = ?', [req.params.id],
      (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
          res.send(result[0]);
        } else {
          res.send('No task found');
        }
      }
    );
  });

  app.get('/categories', (req, res) => {
    db.query('SELECT * FROM Categories', (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });

  app.get('/categories/:id', (req, res) => {
    db.query(
      'SELECT * FROM Categories WHERE id = ?', [req.params.id],
      (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
          res.send(result[0]);
        } else {
          res.send('No category found');
        }
      }
    );
  });

  app.get('/categories/:id/tasks', (req, res) => {
    db.query(
      'SELECT id, title, description, done FROM Tasks WHERE category_id = ?', [req.params.id],
      (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
          res.send(result);
        } else {
          res.send('No tasks found');
        }
      }
    );
  });
  // start server
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });

}, 10000);