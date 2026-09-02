// //connect to mongodb
// import { MongoClient } from "mongodb";
// const client = new MongoClient("mongodb://127.0.0.1:27017");
// client.connect();
// export const db = client.db("gamedata");

//connect to postgres
import "dotenv/config";
import pg from "pg";

const { Pool } = pg;

console.log(process.env);

const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
});


export default pool;
