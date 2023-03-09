const sqlite3 = require('sqlite3').verbose();
// open the database
let db = new sqlite3.Database('./data.sqlite');

exports.GetAll = (req,res)=>{
  let query = 'SELECT * FROM Members';

  db.all(query, [], (err, rows) => {
    if (err) {
      throw err;
    }
    rows.forEach((row) => {
      res.status(200).json({
        row// <------- return all in row for each member
    })
    });
  });

  // close the database connection
  db.close();
}