import ScenarioRepository from "../repositories/ScenarioRepository.js";

class ScenarioService{
    constructor(db){
        this.scenarioRepository = new ScenarioRepository(db)
    }
    async createScenario(body){
        try{
            await this.scenarioRepository.createScenarioRepo(body)
        }
        catch(error){
            throw new Error("There's an error in the service layer - Scenario", error)
        }

    }
    async getScenarios(){
        try{
            return await this.scenarioRepository.getAllScenariosRepo()
        }
        catch(error){
            throw new Error("There's an error in the service layer - Scenario", error)
        }
    }
    async getScenarioById(id){
        try{
            return await this.scenarioRepository.getScenarioByIdRepo(id)
        }
        catch(error){
            throw new Error("There's an error in the service layer - Scenario", error)
        }
    }
    async changeLikeScenario(id, num){
        try{
            return await this.scenarioRepository.changeLikeInScenarioRepo(id, num)
        }
        catch(error){
            console.log(error)
            throw new Error("There's an error in the service layer - Scenario", error)
        }
    }
    async changeDislikeScenario(id, num){
        try{
            return await this.scenarioRepository.changeDislikeScenarioRepo(id, num)
        }
        catch(error){
            throw new Error("There's an error in the service layer - Scenario", error)
        }
    }

    
}

export default ScenarioService