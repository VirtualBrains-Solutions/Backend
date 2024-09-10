import {Router} from "express"
import EmailService from "../services/EmailService.js"

const router = Router()

const emailRouter = (db) => {
    const emailService = new EmailService(db)

    router.post("/send/:id", async (req, res) => {
        try{
            await emailService.sendEmail(req.params.id)
            res.status(200).json({
                "message": "done"
            })
        }
        catch(error){
            res.status(500).json({
                "message": "There's an error in the server",
                error
            })
        }
    })


    return router
}

export default emailRouter