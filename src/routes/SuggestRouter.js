import { Router } from "express";
import SuggestService from "../services/SuggestService.js";

const router = Router()

const suggestRouter = (db) => {

    const suggestService = new SuggestService(db)

    router.post("/", async (req, res) => {
        try{
            await suggestService.createSuggest(req.body)
            res.status(200).json({
                "message": "done"
            })
        }
        catch(error){
            res.status(500).json({
                "message": "There's an error in the server",
                error: error
            })
        }

    })

    router.delete("/delete/all/:id", async (req, res) => {
        try{
            await suggestService.deleteAllSuggestByUserId(req.params.id)
            res.status(200).json({
                "message": "done"
            })
        }
        catch(error){
            res.status(500).json({
                "message": "There's an error in the server",
                error: error
            })
        }
    })

    router.get("/", async (req, res) => {
        try{
            const result = await suggestService.getSuggests()
            res.status(200).json(result)
        }
        catch(error){
            res.status(500).json({
                "message": "There's an error in the server",
                error: error
            })
        }
    })

    return router
    

}

export default suggestRouter