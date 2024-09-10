import queries from "../database/Queries.js"
import sql from "mssql"
import generateId from "../helpers/GenerateId.js"

class QuestionnaireRepository{
    constructor(db){
        this.pool = db
    }
    async createQuestionnaireGeneralRepo(body){
        try{
            const id = generateId()
            await this.pool.request()
            .input("id", sql.Int, id)
            .input("usuario_id", sql.Int, body.usuario_id)
            .input("fecha_creacion", sql.VarChar, body.fecha_creacion)
            .input("pregunta_1", sql.VarChar, body.question1)
            .input("pregunta_2", sql.VarChar, body.question2)
            .input("pregunta_3", sql.VarChar, body.question3)
            .input("pregunta_4", sql.VarChar, body.question4)
            .input("pregunta_5", sql.VarChar, body.question5)
            .input("pregunta_6", sql.VarChar, body.question6)
            .input("pregunta_7", sql.VarChar, body.question7)
            .input("pregunta_8", sql.VarChar, body.question8)
            .input("pregunta_9", sql.VarChar, body.question9)
            .input("pregunta_10", sql.VarChar, body.question10)
            .input("pregunta_11", sql.VarChar, body.question11)
            .input("pregunta_12", sql.VarChar, body.question12)
            .input("pregunta_13", sql.VarChar, body.question13)
            .input("pregunta_14", sql.VarChar, body.question14)
            .input("pregunta_15", sql.VarChar, body.question15)
            .query(queries.addNewQuestionnaireGeneral)
        }
        catch(error){
            console.log(error)
            throw new Error("There's an error in the repo layer", error)
        }
    }
    async createQuestionnairePreSocialRepo(body){
        try{
            const id = generateId()
            await this.pool.request()
            .input("id", sql.Int, id)
            .input("usuario_id", sql.Int, body.usuario_id)
            .input("fecha_creacion", sql.VarChar, body.fecha_creacion)
            .input("pregunta_1", sql.VarChar, body.question1)
            .input("pregunta_2", sql.VarChar, body.question2)
            .input("pregunta_3", sql.VarChar, body.question3)
            .input("pregunta_4", sql.VarChar, body.question4)
            .input("pregunta_5", sql.VarChar, body.question5)
            .input("pregunta_6", sql.VarChar, body.question6)
            .input("pregunta_7", sql.VarChar, body.question7)
            .input("pregunta_8", sql.VarChar, body.question8)
            .input("pregunta_9", sql.VarChar, body.question9)
            .input("pregunta_10", sql.VarChar, body.question10)
            .input("pregunta_11", sql.VarChar, body.question11)
            .input("pregunta_12", sql.VarChar, body.question12)
            .input("pregunta_13", sql.VarChar, body.question13)
            .input("pregunta_14", sql.VarChar, body.question14)
            .query(queries.addNewQuestionnairePreSocial)
        }
        catch(error){
            console.log(error)
            throw new Error("There's an error in the repo layer", error)
        }
    }
    async createQuestionnairePreIntreviewRepo(body){
        try{
            const id = generateId()
            await this.pool.request()
            .input("id", sql.Int, id)
            .input("usuario_id", sql.Int, body.usuario_id)
            .input("fecha_creacion", sql.VarChar, body.fecha_creacion)
            .input("pregunta_1", sql.VarChar, body.question1)
            .input("pregunta_2", sql.VarChar, body.question2)
            .input("pregunta_3", sql.VarChar, body.question3)
            .input("pregunta_4", sql.VarChar, body.question4)
            .input("pregunta_5", sql.VarChar, body.question5)
            .input("pregunta_6", sql.VarChar, body.question6)
            .input("pregunta_7", sql.VarChar, body.question7)
            .input("pregunta_8", sql.VarChar, body.question8)
            .input("pregunta_9", sql.VarChar, body.question9)
            .input("pregunta_10", sql.VarChar, body.question10)
            .input("pregunta_11", sql.VarChar, body.question11)
            .input("pregunta_12", sql.VarChar, body.question12)
            .input("pregunta_13", sql.VarChar, body.question13)
            .input("pregunta_14", sql.VarChar, body.question14)
            .query(queries.addNewQuestionnairePreEntrevista)
        }
        catch(error){
            console.log(error)
            throw new Error("There's an error in the repo layer", error)
        }
    }
    async createQuestionnairePostSocialRepo(body){
        try{
            const id = generateId()
            await this.pool.request()
            .input("id", sql.Int, id)
            .input("usuario_id", sql.Int, body.usuario_id)
            .input("fecha_creacion", sql.VarChar, body.fecha_creacion)
            .input("pregunta_1", sql.VarChar, body.question1)
            .input("pregunta_2", sql.VarChar, body.question2)
            .input("pregunta_3", sql.VarChar, body.question3)
            .input("pregunta_4", sql.VarChar, body.question4)
            .input("pregunta_5", sql.VarChar, body.question5)
            .input("pregunta_6", sql.VarChar, body.question6)
            .input("pregunta_7", sql.VarChar, body.question7)
            .input("pregunta_8", sql.VarChar, body.question8)
            .input("pregunta_9", sql.VarChar, body.question9)
            .input("pregunta_10", sql.VarChar, body.question10)
            .input("pregunta_11", sql.VarChar, body.question11)
            .input("pregunta_12", sql.VarChar, body.question12)
            .input("pregunta_13", sql.VarChar, body.question13)
            .input("pregunta_14", sql.VarChar, body.question14)
            .query(queries.addNewQuestionnairePostSocial)
        }
        catch(error){
            console.log(error)
            throw new Error("There's an error in the repo layer", error)
        }
    }
    async createQuestionnairePostInterviewRepo(body){
        try{
            const id = generateId()
            await this.pool.request()
            .input("id", sql.Int, id)
            .input("usuario_id", sql.Int, body.usuario_id)
            .input("fecha_creacion", sql.VarChar, body.fecha_creacion)
            .input("pregunta_1", sql.VarChar, body.question1)
            .input("pregunta_2", sql.VarChar, body.question2)
            .input("pregunta_3", sql.VarChar, body.question3)
            .input("pregunta_4", sql.VarChar, body.question4)
            .input("pregunta_5", sql.VarChar, body.question5)
            .input("pregunta_6", sql.VarChar, body.question6)
            .input("pregunta_7", sql.VarChar, body.question7)
            .input("pregunta_8", sql.VarChar, body.question8)
            .input("pregunta_9", sql.VarChar, body.question9)
            .input("pregunta_10", sql.VarChar, body.question10)
            .input("pregunta_11", sql.VarChar, body.question11)
            .input("pregunta_12", sql.VarChar, body.question12)
            .input("pregunta_13", sql.VarChar, body.question13)
            .input("pregunta_14", sql.VarChar, body.question14)
            .query(queries.addNewQuestionnairePostEntrevista)
        }
        catch(error){
            console.log(error)
            throw new Error("There's an error in the repo layer", error)
        }
    }



}

export default QuestionnaireRepository