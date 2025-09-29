import express from "express"
import dotenv from "dotenv";
import morgan from "morgan"
import cookieParser from "cookie-parser"
import sequelize from "./config/database.cjs"
dotenv.config()

const port=process.env.PORT || 3000;

const app= express();


app.use(cookieParser());
app.use(morgan('dev'));

//Importing the routes
import taskRoutes from "./routes/task.routes.js"
app.use("/api/v1",taskRoutes);


app.get("/",(req,res)=>{
    res.send("Hello from the backend")
})

app.listen(port,()=>{
    console.log(`Server listening at port ${port}`)
})