import ClinicNoteRepository from "../repositories/ClinicNoteRepository.js";

class ClinicNoteService{
    constructor(db){
        this.clinicNoteRepository = new ClinicNoteRepository(db)
    }
    async createClinicNote(body){
        try{
            await this.clinicNoteRepository.createClinicNoteRepo(body)
        }
        catch(error){
            console.log(error)
            throw new Error("There's an error in the servide layer", error)
        }
    }
    async getClinicsNotesBySessionId(id){
        try{
            return await this.clinicNoteRepository.getClinicsNotesBySessionIdRepo(id)
        }
        catch(error){
            console.log(error)
            throw new Error("There's an error in the servide layer", error)
        }
    }

}

export default ClinicNoteService
