const Database = require('better-sqlite3');
const db = new Database('./Utils/database.db');
module.exports = (bot) => {
    console.log("e")
    db.exec(`CREATE TABLE IF NOT EXISTS backup (name TEXT DEFAULT NULL, link TEXT DEFAULT NULL)`);
    db.exec(`CREATE TABLE IF NOT EXISTS banner (name TEXT DEFAULT NULL, link TEXT DEFAULT NULL)`);
    return db
}