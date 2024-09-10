import {Router} from "express"
import QuestionnaireService from "../services/QuestionnaireService.js"

const router = Router()

const questionnaireRouter = (db) => {

    const questionnaireService = new QuestionnaireService(db)

    router.post("/general", async (req, res) => {
        try{
            await questionnaireService.createQuestionnaireGeneral(req.body)
            res.status(200).json({
                "message": "done"
            })
        }
        catch(error){
            res.status(500).json({
                "message": "Ther's an error in the server",
                error
            })
        }
    })

    router.post("/pre/social", async (req, res) => {
        try{
            await questionnaireService.createQuestionnairePreSocial(req.body)
            res.status(200).json({
                "message": "done"
            })
        }
        catch(error){
            res.status(500).json({
                "message": "Ther's an error in the server",
                error
            })
        }
    })

    router.post("/pre/interview", async (req, res) => {
        try{
            await questionnaireService.createQuestionnairePreInterview(req.body)
            res.status(200).json({
                "message": "done"
            })
        }
        catch(error){
            res.status(500).json({
                "message": "Ther's an error in the server",
                error
            })
        }
    })

    router.post("/post/social", async (req, res) => {
        try{
            await questionnaireService.createQuestionnairePostSocial(req.body)
            res.status(200).json({
                "message": "done"
            })
        }
        catch(error){
            res.status(500).json({
                "message": "Ther's an error in the server",
                error
            })
        }
    })

    router.post("/post/interview", async (req, res) => {
        try{
            await questionnaireService.createQuestionnairePostInterview(req.body)
            res.status(200).json({
                "message": "done"
            })
        }
        catch(error){
            res.status(500).json({
                "message": "Ther's an error in the server",
                error
            })
        }
    })

    return router

}

export default questionnaireRouter