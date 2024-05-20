import {Router} from "express"
import UserService from "../services/UserService.js"

const router = Router()

// Controllers

const userRouter = (db) => {
    
    const userService = new UserService(db)

    // Endpoint to create a user
    router.post("/", async (req, res) => {
        try{
            await userService.createUser(req.body)
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

    // Get users
    router.get("/", async (req, res) => {
        try{
            const result =  await userService.getUsers()
            res.status(200).json(result)
        }
        catch(error){
            res.status(500).json({
                "message": "There's an error in the server",
                error
            })
        }
    })

    // Get user by id
    router.get("/:id", async (req, res) => {
        try{
            const result =  await userService.getUserById(req.params.id)
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

export default userRouter