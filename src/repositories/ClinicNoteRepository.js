import queries from "../database/Queries.js"
import sql from "mssql"

class ClinicNoteRepository{
    constructor(db){
        this.pool = db
    }
    async createClinicNoteRepo(body){
        try{
            console.log(body)
            await this.pool.request()
            .input("id", sql.Int, 1)
            .input("sesion_id", sql.Int, body.sesion_id)
            .input("descripcion", sql.VarChar, body.descripcion)
            .query(queries.addNewClinicNote)

        }
        catch(error){
            console.log(error)
            throw new Error("There is an error in the repository layer", error)
        }

    }
    async getClinicsNotesBySessionIdRepo(id){
        try{
            const query = `select * from dbo.notas_clinicas where sesion_id = ${id}`
            const result = await this.pool.request().query(query)
            const {recordset} = result
            return recordset
        }
        catch(error){
            console.log(error)
            throw new Error("There is an error in the repository layer", error)
        }
    }

}

export default ClinicNoteRepository