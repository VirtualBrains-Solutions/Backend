import queries from "../database/Queries.js";
import sql from "mssql"
import generateId from "../helpers/GenerateId.js";

class CommentRepository{
    constructor(db){
        this.pool = db
    }
    async createCommentRepo(body){
        try{
            const id = generateId()
            await this.pool.request()
            .input("id", sql.Int, id)
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
    async createCommentChildRepo(body){
        try{
            console.log(body)
            const id = generateId()
            await this.pool.request()
            .input("id", sql.Int, id)
            .input("texto", sql.VarChar, body.texto)
            .input("escenario_id", sql.Int, body.escenario_id)
            .input("usuario_id", sql.Int, body.usuario_id)
            .input("fecha_creacion", sql.Date, body.fecha_creacion)
            .input("comentario_padre_id", sql.Int, body.comentario_padre_id)
            .query(queries.addNewCommentChild)
        }
        catch(error){
            console.log("Error in the create comment repository", error)
            throw new Error("There's an error in the Repository layer -- Comment", error)
        }
    }
    async getCommentByScenarioRepo(id){
        try{
            const query = `select * from dbo.comentarios CO
                            inner join dbo.usuarios US on
                            CO.usuario_id = US.id
                            where escenario_id = ${id}`
            const result = await this.pool.request().query(query)
            const {recordset} = result
            return recordset
        }
        catch(error){
            console.log("Error in the get comments by scenario id", error)
            throw new Error("There's an error in the Repository layer -- Comment", error)
        }

    }
    async deleteAllCommentsByUserIdRepo(id){
        try{
            const query = `delete from dbo.comentarios where usuario_id = ${id}`
            await this.pool.request().query(query)
        }
        catch(error){
            console.log("Error in the get comments by scenario id", error)
            throw new Error("There's an error in the Repository layer -- Comment", error)
        }
    }
    async deleteCommentByIdRepo(id){
        try{
            const query = `delete from dbo.comentarios where id = ${id}`
            await this.pool.request().query(query)
        }
        catch(error){
            console.log("Error in the get comments by scenario id", error)
            throw new Error("There's an error in the Repository layer -- Comment", error)
        }
    }

}

export default CommentRepository