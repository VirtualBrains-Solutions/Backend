import { Router } from "express";
import SessionService from "../services/SessionService.js";

const router = Router()

const sessionRouter = (db) => {

    const sessionService = new SessionService(db)

    router.post("/", async (req, res) => {
        try{
            await sessionService.createSession(req.body)
            res.status(200).json({
                "message": "done"
            })
        }
        catch(error){
            console.log(error)
            res.status(500).json({
                "message": "There's an error in the server",
                error: error
            })
        }
    })

    router.delete("/delete/all/:id", async (req, res) => {
        try{
            await sessionService.deleteAllSessionsByPatientId(req.params.id)
            res.status(200).json({
                "message": "done"
            })
        }
        catch(error){
            console.log(error)
            res.status(500).json({
                "message": "There's an error in the server",
                error: error
            })
        }
    })
    
    router.get("/patient/:id", async (req, res) => {
        try{
            const result = await sessionService.getSessionsByPatientId(req.params.id)
            res.status(200).json(result)
        }
        catch(error){
            res.status(500).json({
                "message": "There's an error in the server"
            })
        }
    })

    router.get("/medic/:id", async (req, res) => {
        try{
            const result = await sessionService.getSessionsByMedicalId(req.params.id)
            res.status(200).json(result)
        }
        catch(error){
            res.status(500).json({
                "message": "There's an error in the server"
            })
        }
    })    

    return router
}

export default sessionRouter