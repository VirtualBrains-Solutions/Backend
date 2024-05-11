import sql from "mssql"
import queries from "../database/Queries.js"

class SuggestRepository{
    constructor(db){
        this.pool = db
    }
    async createSuggestRepo(body){
        try{
            await this.pool.request()
            .input("id", sql.Int, 1)
            .input("tipo_sugerencia", sql.VarChar, body.tipo_sugerencia)
            .input("comentario_sugerencia", sql.VarChar, body.comentario_sugerencia)
            .input("fecha_creacion", sql.Date, body.fecha_creacion)
            .input("usuario_id", sql.Int, body.usuario_id)
            .query(queries.addNewSuggest)
        }
        catch(error){
            console.log(error)
            throw new Error("There's an error in the Suggest Repository", error)
        }
    }
    async getSuggestionsRepo(){
        try{
            const query = "select * from dbo.sugerencias"
            const result = await this.pool.request().query(query)
            const {recordset} = result
            return recordset
        }
        catch(error){
            console.log("There's an error in the Suggest Repository", error)
            throw new Error("There's an error in the Suggest Repository", error)
        }
    }


}

export default SuggestRepository