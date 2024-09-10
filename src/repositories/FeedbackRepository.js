import queries from "../database/Queries.js"
import sql from "mssql"
import generateId from "../helpers/GenerateId.js"


class FeedbackRepository{
    constructor(db){
        this.pool = db
    }
    async createFeedbackRepo(body){
        try{
            const id = generateId()
            await this.pool.request()
            .input("id", sql.Int, id)
            .input("usuario_id", sql.Int, body.usuario_id)
            .input("feedback_descripcion", sql.VarChar, body.feedback_descripcion)
            .input("velocidad_de_habla", sql.VarChar, body.velocidad_de_habla)
            .input("contacto_visual", sql.VarChar,body.contacto_visual)
            .input("palabras_de_filtro", sql.VarChar, body.palabras_de_filtro)
            .input("facilidad_de_escucha", sql.VarChar, body.facilidad_de_escucha)
            .input("score", sql.VarChar, body.score)
            .query(queries.addNewFeedback)
        }
        catch(error){
            console.log(error)
            throw new Error("There's an error in the repo layer", error)
        }
    }
    async getFeedbacksRepo(){
        try{
            const query = `select * from dbo.feedbacks`
            const result = await this.pool.request().query(query)
            const {recordset} = result
            return recordset
        }
        catch(error){
            console.log(error)
            throw new Error("There's an error in the repo layer", error)
        }
    }

    async getFeedbacksByUserId(id){
        try{
            const query = `select * from dbo.feedbacks where usuario_id = ${id}`
            const result = await this.pool.request().query(query)
            const {recordset} = result
            return recordset
        }
        catch(error){
            console.log(error)
            throw new Error("There's an error in the repo layer", error)
        }
    }
}

export default FeedbackRepository