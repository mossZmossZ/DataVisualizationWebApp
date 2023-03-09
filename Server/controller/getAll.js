const sqlite3 = require('sqlite3').verbose();




exports.GetAll = (req,res)=>{
  
  const db = new sqlite3.Database('./data.sqlite', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the SQLite database.');
  });//connect to database
  const sql = 'SELECT * FROM Members'; //query command
  db.all(sql, [], (err, rows) => {
    if (err) {
      return console.error(err.message);
    }
    res.json(rows);//response
  });
 

  // close the database connection
  db.close();

}
