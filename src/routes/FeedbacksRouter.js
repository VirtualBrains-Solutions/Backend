import { Router } from "express"
import FeedbackService from "../services/FeedbackService.js"

const router = Router()

const feedbackRouter = (db) => {

    const feedbackService = new FeedbackService(db)

    router.get("/", async (req, res) => {
        try{
            const result = await feedbackService.getFeedbacks()
            res.status(200).json(result)
        }
        catch(error){
            console.log(error)
            res.status(500).json({
                "message": "There's an error in the server",
                error
            })
        }
    })

    router.post("/", async (req, res) => {
        try{
            await feedbackService.createFeedback(req.body)
            res.status(200).json({
                "message": "done"
            })
        }
        catch(error){
            console.log(error)
            res.status(500).json({
                "message": "There's an error in the server",
                error
            })
        }
    })

    return router
}

export default feedbackRouter