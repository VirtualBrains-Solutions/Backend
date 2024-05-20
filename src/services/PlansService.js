import PlansRepository from "../repositories/PlansRepository.js";

class PlansService{
    constructor(db){
        this.planRepository = new PlansRepository(db)
    }

    async createPlan(body){
        try{
            await this.planRepository.createPlanRepo(body)
        }
        catch(error){
            console.log(error)
            throw new Error("There's an error in the plan service", error)
        }
    }
    async getPlansByPatientId(id){
        try{
            return await this.planRepository.getPlansByPatientIdRepo(id)
        }
        catch(error){
            console.log(error)
            throw new Error("There's an error in the plan service", error)
        }
    }
    async getPlansByMedicalId(id){
        try{
            return await this.planRepository.getPlansByMedicalIdRepo(id)
        }
        catch(error){
            console.log(error)
            throw new Error("There's an error in the plan service", error)
        }
    }
    async deleteAllPlansByPatientId(id){
        try{
            await this.planRepository.deleteAllPlansByPatientIdRepo(id)
        }
        catch(error){
            console.log(error)
            throw new Error("There's an error in the plan service", error)
        }
    }
}

export default PlansService