const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

// create database connection
const db = mysql.createConnection({
    host: '0.0.0.0',
    user: 'root',
    password: 'toor',
    database: 'ToDo',
    ssl: false,
    port: 3306
});

// connect to database
db.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
});

const app = express();
const port = 3000;

app.use(bodyParser.json());


app.get("/", (req, res) => {
    res.send("Hello World!");
});

// HTTP endpoint to get all users from the database
app.get('/tasks', (req, res) => {
    db.query('SELECT * FROM tasks', (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

app.get('/tasks/:id', (req, res) => {
    db.query('SELECT * FROM tasks WHERE id = ?', [req.params.id], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.send(result[0]);
        } else {
            res.send('No task found');

        }
    });
});

app.get('/categories', (req, res) => {
    db.query('SELECT * FROM categories', (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

app.get('/categories/:id', (req, res) => {
    db.query('SELECT * FROM categories WHERE id = ?', [req.params.id], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.send(result[0]);
        } else {
            res.send('No category found');

        }
    });
});

app.get('/categories/:id/tasks', (req, res) => {
    db.query('SELECT id, title, description, done FROM tasks WHERE category_id = ?', [req.params.id], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.send(result);
        } else {
            res.send('No tasks found');
        }
    });
});

// start server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});