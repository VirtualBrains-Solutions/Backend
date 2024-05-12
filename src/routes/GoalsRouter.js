import { Router } from "express";
import GoalService from "../services/GoalsService.js";

const router = Router()


const goalRouter = (db) => {
    const goalService = new GoalService(db)

    router.post("/", async (req, res) => {
        try{
            await goalService.createGoal(req.body)
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

    router.get("/plan/:id", async (req, res) => {
        try{
            const result = await goalService.getGoalsByPlanId(req.params.id)
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
    
    return router
}

export default goalRouter