const db = require('./database');

db.query('SELECT * FROM users', (err, results) => {
  if (err) throw err;
  console.log(results);
});
