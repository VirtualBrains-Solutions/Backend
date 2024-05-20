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
            res.status(200).json(result)
        }
        catch(error){
            res.status(500).json({
                "message": "Ther's an error in the server",
                error
            })
        }
    })

    router.delete("/favorite/delete/:id", async (req, res) => {
        try{
            await scenarioService.deleteFavoriteScenario(req.params.id)
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

    router.get("/favorite/users/:id", async (req, res) => {
        try{
            const result = await scenarioService.getFavoritesScenariosByUser(req.params.id)
            res.status(200).json(result)
        }
        catch(error){
            res.status(500).json({
                "message": "Ther's an error in the server",
                error
            })
        }
    })

    router.post("/favorite/validate", async (req, res) => {
        try{
            const result = await scenarioService.validateFavoriteScenario(req.body)
            res.status(200).json(result)
        }
        catch(error){
            res.status(500).json({
                "message": "Ther's an error in the server",
                error
            })
        }
    })

    router.post("/favorite", async (req, res) => {
        try{
            await scenarioService.createFavoriteScenario(req.body)
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

    router.put("/likes/:id", async (req,res) => {
        try{
            await scenarioService.changeLikeScenario(req.params.id, req.body.num)
            res.status(200).json({
                "message": "done"
            })
        }
        catch(error){
            console.log(error)
            res.status(500).json({
                "message": "Ther's an error in the server",
                error
            })
        }
    })

    router.put("/dislikes/:id", async (req, res) => {
        try{
            await scenarioService.changeDislikeScenario(req.params.id, req.body.num)
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