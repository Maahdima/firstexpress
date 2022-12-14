var sqlite3 = require("sqlite3").verbose();

const DBSOURCE = "/etc/x-ui/x-ui.db";

let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    // Cannot open database
    console.error(err.message);
    throw err;
  } else {
    console.log("Connected to the SQLite database.");
  }
});

module.exports = db;
