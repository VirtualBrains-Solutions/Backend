import SuggestRepository from "../repositories/SuggestRepository.js";

class SuggestService{
    constructor(db){
        this.suggestRepository = new SuggestRepository(db)

    }
    async createSuggest(body){
        try{
            await this.suggestRepository.createSuggestRepo(body)
        }
        catch(error){
            throw new Error("There's an error in the suggest service", error)
        }
    }
    async getSuggests(){
        try{
            return await this.suggestRepository.getSuggestionsRepo()
        }
        catch(error){
            console.log("There's an error in the suggest service", error)
            throw new Error("There's an error in the suggest service", error)
        }
    }

}

export default SuggestService