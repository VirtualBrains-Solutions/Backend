import CommentRepository from "../repositories/CommentRepository.js";

class CommentService{
    constructor(db){
        this.commentRepository = new CommentRepository(db)
    }
    async createComment(body){
        try{
            await this.commentRepository.createCommentRepo(body)
        }
        catch(error){
            console.log("There's an error in the create comment service", error)
            throw new Error("There's an error in the service layer -- Comment", error)
        }
    }
    async getCommentByScenarioId(id){
        try{
            return await this.commentRepository.getCommentByScenarioRepo(id)
        }
        catch(error){
            console.log("There's an error in the get scenarios by id service", error)
            throw new Error("There's an error in the service layer -- Comment", error)
        }
    }
    async deleteAllCommentByUserId(id){
        try{
            await this.commentRepository.deleteAllCommentsByUserIdRepo(id)
        }
        catch(error){
            console.log("There's an error in the get scenarios by id service", error)
            throw new Error("There's an error in the service layer -- Comment", error)
        }
    }
    async deleteCommentById(id){
        try{
            await this.commentRepository.deleteCommentByIdRepo(id)
        }
        catch(error){
            console.log("There's an error in the get scenarios by id service", error)
            throw new Error("There's an error in the service layer -- Comment", error)
        }
    }
}

export default CommentService