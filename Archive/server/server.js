// server.js
const express = require('express');
const sqlite3 = require('sqlite3');
const path = require('path');

const app = express();
const db = new sqlite3.Database('./Resources/StarWarsdatabase.db');

app.use(express.static('public'));

// Define the '/data' endpoint
app.get('/data', (req, res) => {
    // Retrieve data from the 'chart_data' table
    db.all('SELECT * FROM vehicles', (err, rows) => {
        if (err) {
            // Handle database error
            console.error('Database error:', err);
            res.status(500).json({ error: 'Database error' });
            return;
        }

        if (rows.length === 0) {
            // No data found
            console.warn('No data found in the chart_data table.');
            res.status(404).json({ error: 'No data found' });
            return;
        }

        // Send the data as JSON in the response
        res.json(rows);
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
