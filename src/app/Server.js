import express from "express"
import connectDatabase from "../config/ConfigDatabase.js"

// Routes
import userRouter from "../routes/UserRouter.js"
import scenarioRouter from "../routes/ScenarioRouter.js"

class Server{
    constructor(){
        this.app = express()
        this.port = process.env.PORT
    }
    async initiliaze(){
        try{
            this.db = await connectDatabase();

            this.app.use(express.json())

            this.routes()
        }
        catch(error){
            console.log("Error in the database connection")
        }
    }
    routes(){
        this.app.use("/users", userRouter(this.db))
        this.app.use("/scenarios", scenarioRouter(this.db))
    }
    async listen(){
        await this.initiliaze()
        this.app.listen(this.port, () => {
            console.log(`Running on port ${this.port}`)
        })
    }


}

export default Server