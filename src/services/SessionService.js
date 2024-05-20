import SessionRepository from "../repositories/SessionRepository.js";

class SessionService{
    constructor(db){
        this.sessionRepository = new SessionRepository(db)
    }
    async createSession(body){
        try{
            await this.sessionRepository.createSessionRepo(body)
        }
        catch(error){
            throw new Error("There's an error in the service layer -- Session", error)
        }
    }
    async getSessionsByPatientId(id){
        try{
            return await this.sessionRepository.getSessionsByPatientId(id)
        }
        catch(error){
            throw new Error("There's an error in the service layer -- Session", error)
        }
    }
    async getSessionsByMedicalId(id){
        try{
            return await this.sessionRepository.getSessionsByMedicalId(id)
        }
        catch(error){
            throw new Error("There's an error in the service layer -- Session", error)
        }
    }
    async deleteAllSessionsByPatientId(id){
        try{
            await this.sessionRepository.deleteAllSessionsByPatientIdRepo(id)
        }
        catch(error){
            throw new Error("There's an error in the service layer -- Session", error)
        }
    }
    
}

export default SessionService