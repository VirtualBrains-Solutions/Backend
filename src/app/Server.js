import express from "express"
import cors from "cors"
import fileUpload from "express-fileupload";
import connectDatabase from "../config/ConfigDatabase.js"

// Routes
import userRouter from "../routes/UserRouter.js"
import scenarioRouter from "../routes/ScenarioRouter.js"
import commentRouter from "../routes/CommentRouter.js"
import suggestRouter from "../routes/SuggestRouter.js"
import sessionRouter from "../routes/SessionRouter.js"
import clinicNoteRouter from "../routes/ClinicNoteRouter.js"
import planRouter from "../routes/PlansRouter.js"
import goalRouter from "../routes/GoalsRouter.js"
import feedbackRouter from "../routes/FeedbacksRouter.js";
import questionnaireRouter from "../routes/QuestionnaireRouter.js";
import emailRouter from "../routes/EmailRouter.js";

class Server{
    constructor(){
        this.app = express()
        this.port = process.env.PORT
    }
    async initiliaze(){
        try{
            this.db = await connectDatabase();

            this.app.use(cors());

            this.app.use(express.json())

            this.app.use(express.urlencoded({extended: true}))

            this.app.use(fileUpload({
                useTempFiles: true,
                tempFileDir: "/tmp/"
            }));

            this.routes()
            
        }
        catch(error){
            console.log("Error in the database connection")
        }
    }
    routes(){
        this.app.use("/users", userRouter(this.db))
        this.app.use("/scenarios", scenarioRouter(this.db))
        this.app.use("/comments", commentRouter(this.db))
        this.app.use("/suggests", suggestRouter(this.db))
        this.app.use("/sessions", sessionRouter(this.db))
        this.app.use("/clinicnotes", clinicNoteRouter(this.db))
        this.app.use("/plans", planRouter(this.db))
        this.app.use("/goals", goalRouter(this.db))
        this.app.use("/feedbacks", feedbackRouter(this.db))
        this.app.use("/questionnaires", questionnaireRouter(this.db))
        this.app.use("/emails",emailRouter(this.db))
    }
    async listen(){
        await this.initiliaze()
        this.app.listen(this.port, () => {
            console.log(`Running on port ${this.port}`)
        })
    }


}

export default Server