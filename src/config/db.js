import mysql from "mysql2/promise";

export async function query(q, VALUES = []) {
    const con = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
        database: process.env.DB_NAME,
    });

    try {
        const [results] = await con.execute(q, VALUES);
        con.end();
        return results;
    } catch (error) {
        con.end();
        return error;
    } finally {
        con.end();
    }
}
