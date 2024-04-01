const mongoose = require("mongoose");

function connectToDB() {
    return new Promise((resolve, reject) => {
        const dbUrl = process.env.MONGODB_URL;
        const dbUser = process.env.MONGODB_USER;
        const dbPass = process.env.MONGODB_PASS;
        const dbName = process.env.MONGODB_DB;

        mongoose.connect(`mongodb://${dbUser}:${dbPass}@${dbUrl}/${dbName}?authSource=admin`);
        const db = mongoose.connection;

        db.on("error", (err) => {
            console.error("Database connection error:", err);
            reject(err);
        });
        db.once("open", () => {
            console.log("Database connection successful");
            resolve(db);
        });
    });
}

module.exports = connectToDB;
