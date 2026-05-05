// CREATE DATABASE company_db;

// CREATE TABLE employees (
//     id SERIAL PRIMARY KEY,
//     name VARCHAR(100) NOT NULL,
//     role VARCHAR(50),
//     salary NUMERIC(10, 2),
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );
const express = require('express');
const { Pool } = require('pg');

const app = express();
app.use(express.json());

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'company_db',
    password: 'your_password',
    port: 5432,
});

app.post('/employees', async (req, res) => {
    try {
        const { name, role, salary } = req.body;
        const result = await pool.query(
            'INSERT INTO employees (name, role, salary) VALUES ($1, $2, $3) RETURNING *',
            [name, role, salary]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/employees', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM employees ORDER BY id ASC');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put('/employees/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, role, salary } = req.body;
        const result = await pool.query(
            'UPDATE employees SET name = $1, role = $2, salary = $3 WHERE id = $4 RETURNING *',
            [name, role, salary, id]
        );
        if (result.rows.length === 0) return res.status(404).send('Not Found');
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete('/employees/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query('DELETE FROM employees WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) return res.status(404).send('Not Found');
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(3000, () => {
    console.log('Server active on port 3000');
});


