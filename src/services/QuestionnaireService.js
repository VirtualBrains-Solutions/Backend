import QuestionnaireRepository from "../repositories/QuestionnaireRepository.js";

class QuestionnaireService{
    constructor(db){
        this.questionnaireRepository = new QuestionnaireRepository(db)
    }

    async createQuestionnaireGeneral(body){
        try{
            await this.questionnaireRepository.createQuestionnaireGeneralRepo(body)
        }
        catch(error){
            console.log(error)
            throw new Error("There's an error in the questionnaire service", error)
        }
    }
    async createQuestionnairePreSocial(body){
        try{
            await this.questionnaireRepository.createQuestionnairePreSocialRepo(body)
        }
        catch(error){
            console.log(error)
            throw new Error("There's an error in the questionnaire service", error)
        }
    }
    async createQuestionnairePreInterview(body){
        try{
            await this.questionnaireRepository.createQuestionnairePreIntreviewRepo(body)
        }
        catch(error){
            console.log(error)
            throw new Error("There's an error in the questionnaire service", error)
        }
    }
    async createQuestionnairePostSocial(body){
        try{
            await this.questionnaireRepository.createQuestionnairePostSocialRepo(body)
        }
        catch(error){
            console.log(error)
            throw new Error("There's an error in the questionnaire service", error)
        }
    }
    async createQuestionnairePostInterview(body){
        try{
            await this.questionnaireRepository.createQuestionnairePostInterviewRepo(body)
        }
        catch(error){
            console.log(error)
            throw new Error("There's an error in the questionnaire service", error)
        }
    }
}

export default QuestionnaireService