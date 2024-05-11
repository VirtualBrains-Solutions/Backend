import {Router} from "express"
import ScenarioService from "../services/ScenarioService.js"

const router = Router()

const scenarioRouter = (db) => {

    const scenarioService = new ScenarioService(db)

    router.post("/", async (req, res) => {
        try{
            await scenarioService.createScenario(req.body)
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

    router.get("/", async (req, res) => {
        try{
            const result = await scenarioService.getScenarios()
            console.log(result)
            res.status(200).json(result)
        }
        catch(error){
            res.status(500).json({
                "message": "Ther's an error in the server",
                error
            })
        }
    })

    router.get("/:id", async (req, res) => {
        try{
            const result = await scenarioService.getScenarioById(req.params.id)
            res.status(200).json(result)
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

export default scenarioRouter