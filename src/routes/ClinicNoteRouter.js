import { Router } from "express";
import ClinicNoteService from "../services/ClinicNoteService.js";

const router = Router()


const clinicNoteRouter = (db) => {

    const clinicNoteService = new ClinicNoteService(db)

    router.post("/", async (req, res) => {
        try{
            await clinicNoteService.createClinicNote(req.body)
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

    router.get("/session/:id", async (req, res) => {
        try{
            const result = await clinicNoteService.getClinicsNotesBySessionId(req.params.id)
            res.status(200).json(result)
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

export default clinicNoteRouter