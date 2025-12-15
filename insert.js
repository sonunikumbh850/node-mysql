const db = require('./database');

const user = {
  name: 'John Doe',
  email: 'john@example.com'
};

const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';

db.query(sql, [user.name, user.email], (err, result) => {
  if (err) throw err;
  console.log('User inserted with ID:', result.insertId);
});
