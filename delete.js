const db = require('./database');

const sql = 'DELETE FROM users WHERE id = ?';

db.query(sql, [1], (err, result) => {
  if (err) throw err;
  console.log('Rows deleted:', result.affectedRows);
});
