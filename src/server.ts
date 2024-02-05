import express, {Express} from 'express'
import itemRoutes from "./routes/item-routes";
import dotenv from 'dotenv'
import {Server} from "http";
import path from "path";
import DbUtil from "./utils/db-util";
import {DbConfig} from "./configs/db-config";
dotenv.config()

const PORT = 5000
const app = express()
let server: Server

// json serialize
app.use(express.json())

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));


// routes
app.get('/', (req, res)=> {
    res.status(200).json({message: 'Hello Metaroon 2024!'})
    // res.sendFile(path.join(__dirname, 'public/index.html'));
})
app.use('/api/v1/items', itemRoutes)


//Init DB
const DB: DbUtil = new DbUtil({
    HOST: DbConfig.DB_HOST,
    USER: DbConfig.DB_USER,
    PASSWORD: DbConfig.DB_PASSWORD,
    DATABASE: DbConfig.DB_DATABASE
})

DB.createConnection().then(() => {
    console.log('✅ Connected successfully to the database')
}).catch((ex) => {
    console.error('🔴 Database connection unsuccessful!')
})

// Start the express app
//
//     server = app.listen(PORT, ()=> {
//         console.log(`🚀 Server is running on port ${PORT}`)
//     })


export {app,server}

