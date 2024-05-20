import { Router } from "express";
import PlansService from "../services/PlansService.js";


const router = Router()

const planRouter = (db) => {
    const planService = new PlansService(db)

    router.post("/", async (req, res) => {
        try{
            await planService.createPlan(req.body)
            res.status(200).json({
                "message": "done"
            })
        }
        catch(error){
            console.log(error)
            throw new Error("There's an error in the server", error)
        }
    })

    router.delete("/patient/delete/plans/:id", async (req, res) => {
        try{
            await planService.deleteAllPlansByPatientId(req.params.id)
            res.status(200).json({
                "message": "done"
            })
        }
        catch(error){
            console.log(error)
            throw new Error("There's an error in the server", error)
        }
    })

    router.get("/patient/:id", async (req, res) => {
        try{
            const result = await planService.getPlansByPatientId(req.params.id)
            res.status(200).json(result)
        }
        catch(error){
            console.log(error)
            throw new Error("There's an error in the server", error)
        }
    })

    router.get("/medic/:id", async (req, res) => {
        try{
            const result = await planService.getPlansByMedicalId(req.params.id)
            res.status(200).json(result)
        }
        catch(error){
            console.log(error)
            throw new Error("There's an error in the server", error)
        }
    })

    return router
}


export default planRouter