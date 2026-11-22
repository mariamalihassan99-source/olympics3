// imports
import connectToDB from './config/db.js'
import express from "express" //importing express package
const app = express() // creates a express application
import dotenv from "dotenv"
dotenv.config() //this allows me to use my .env values in this file
import morgan from 'morgan'
import cors from 'cors'


// Routes Import
import zaidRoutes from './routes/zaid.routes.js'


// Middleware
app.use(
    cors({
        origin: process.env.CLIENT_URL || 'http://localhost:5173',
    })
);
app.use(express.json())
app.use(morgan('dev'))


// Routes Here
app.use('/zaids',zaidRoutes)


// connect to database and listen on Port 3000
async function startServer() {
    const PORT = process.env.PORT || 3000;
    await connectToDB();

    app.listen(PORT, () => {
        console.log(`App is running on port ${PORT}`);
    });
}
startServer();