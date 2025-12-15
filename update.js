const db = require('./database');

const sql = 'UPDATE users SET name = ? WHERE id = ?';

db.query(sql, ['Jane Doe', 1], (err, result) => {
  if (err) throw err;
  console.log('Rows updated:', result.affectedRows);
});
