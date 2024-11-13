const { Pool } = require("pg");

const pool = new Pool({
  user: "aadeeshbali",
  password: "Haha^552615",
  database: "test_db",
  host: "localhost",
  port: 5432,
});

const connectDB = async () => {
  try {
    const connection = await pool.connect();
    console.log("Connected");
    await pool.query("SET search_path TO test_schema");
  } catch (error) {
    console.log("Error connecting to database", error);
  }
};

connectDB();

module.exports = { pool, connectDB };
