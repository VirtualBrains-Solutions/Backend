import {Router} from "express"
import CommentService from "../services/CommentService.js"

const router = Router()


const commentRouter = (db) => {
    
    const commentService = new CommentService(db)

    router.post("/", async (req, res) => {
        try{
            await commentService.createComment(req.body)
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

    router.post("/child", async(req, res) => {
        console.log(req.body)
        try{
            await commentService.createCommentChild(req.body)
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

    router.delete("/delete/user/:id", async (req, res) => {
        try{
            await commentService.deleteAllCommentByUserId(req.params.id)
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

    router.delete("/delete/comment/:id", async (req, res) => {
        try{
            await commentService.deleteCommentById(req.params.id)
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

    router.get("/scenario/:id", async (req, res) => {
        try{
            const result = await commentService.getCommentByScenarioId(req.params.id)
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

export default commentRouter