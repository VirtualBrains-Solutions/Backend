import queries from "../database/Queries.js";
import sql from "mssql"

class CommentRepository{
    constructor(db){
        this.pool = db
    }
    async createCommentRepo(body){
        try{
            await this.pool.request()
            .input("id", sql.Int, 2)
            .input("texto", sql.VarChar, body.texto)
            .input("escenario_id", sql.Int, body.escenario_id)
            .input("usuario_id", sql.Int, body.usuario_id)
            .input("fecha_creacion", sql.Date, body.fecha_creacion)
            .query(queries.addNewComment)
        }
        catch(error){
            console.log("Error in the create comment repository", error)
            throw new Error("There's an error in the Repository layer -- Comment", error)
        }
    }
    async getCommentByScenarioRepo(id){
        try{
            const query = `select * from dbo.comentarios where escenario_id = ${id}`
            const result = await this.pool.request().query(query)
            const {recordset} = result
            return recordset
        }
        catch(error){
            console.log("Error in the get comments by scenario id", error)
            throw new Error("There's an error in the Repository layer -- Comment", error)
        }

    }

}

export default CommentRepository