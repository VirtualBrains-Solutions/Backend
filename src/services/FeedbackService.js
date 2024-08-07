import FeedbackRepository from "../repositories/FeedbackRepository.js"

class FeedbackService{
    constructor(db){
        this.feedbackRepository = new FeedbackRepository(db)
    }
    async createFeedback(body){
        try{
            await this.feedbackRepository.createFeedbackRepo(body)
        }
        catch(error){
            console.log(error)
            throw new Error("There's an error in the service layer feedback", error)
        }
    }
    async getFeedbacks(){
        try{
            const results = await this.feedbackRepository.getFeedbacksRepo()
            return results
        }
        catch(error){
            console.log(error)
            throw new Error("There's an error in the service layer feedback", error)
        }
    }

}

export default FeedbackService