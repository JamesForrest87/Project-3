const sqlite3 = require('sqlite3').verbose();
let sql;

//connect to DB
const db = new sqlite3.Database ('./Resources/StarWarsdatabase.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the Star Wars database.');
});

sql = `SELECT * FROM vehicles`;
db.all(sql, [], (err, rows) => {
    if (err) return console.error(err.message);
    rows.forEach((row) => {
        console.log(row);
    });
})

