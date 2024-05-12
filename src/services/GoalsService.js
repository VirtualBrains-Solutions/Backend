import GoalsRepository from "../repositories/GoalsRepository.js";

class GoalService{
    constructor(db){
        this.goalRepository = new GoalsRepository(db)
    }
    async createGoal(body){
        try{
            await this.goalRepository.createGoalRepo(body)
        }
        catch(error){
            console.log(error)
            throw new Error("There's an error in the service layer goal", error)
        }
    }
    async getGoalsByPlanId(id){
        try{
            return await this.goalRepository.getGoalsByPlanIdRepo(id)
        }
        catch(error){
            console.log(error)
            throw new Error("There's an error in the service layer goal", error)
        }
    }
}

export default GoalService