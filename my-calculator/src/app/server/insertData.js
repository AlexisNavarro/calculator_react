const sqlite3 = require("sqlite3").verbose();
const path = require("path");

//connect to the path where our database lies
const dbPath = path.join(__dirname, "../../app/database/calculator.db");
console.log(`Using database path: ${dbPath}`);

const db = new sqlite3.Database(dbPath, (err)=>{
    if(err){
        console.error("❌ Database Connection Error:", err.message);
        return;
    }
    console.log("✅ Connected to SQLite database.");
});

const equation = "10/2";
const result = "5";

//insert data into the history table
db.run("INSERT INTO history(equation, result) VALUES(?,?)",[equation,result],function(err){
    if(err){
        return console.error(err.message);
    }
    console.log(`New entry added with ID: ${this.lastID}`);
});

db.close();