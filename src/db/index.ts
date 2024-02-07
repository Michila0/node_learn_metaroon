import mysql from "mysql2";
import {DbConfig} from "../configs/db-config";

export default mysql.createConnection({
    host: DbConfig.DB_HOST,
    user: DbConfig.DB_USER,
    password: DbConfig.DB_PASSWORD,
    database: DbConfig.DB_DATABASE,

})