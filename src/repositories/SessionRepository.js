import sql from "mssql"
import queries from "../database/Queries.js"
import generateId from "../helpers/GenerateId.js"

class SessionRepository{
    constructor(dbo){
        this.pool = dbo
    }
    async createSessionRepo(body){
        try{
            const id = generateId()
            await this.pool.request()
            .input("id", sql.Int, id)
            .input("fecha_creacion", sql.Date, body.fecha_creacion)
            .input("usuario_id", sql.Int, body.usuario_id)
            .input("nombre_sesion", sql.VarChar, body.nombre_sesion)
            .input("medico_id", sql.Int, body.medico_id)
            .query(queries.addNewSession)
        }
        catch(error){
            throw new Error("There's an error in the Repository layer -- Session")
        }
    }
    async getSessionsByPatientId(id){
        try{
            const query = `select * from dbo.sesiones where usuario_id = ${id}`
            const result = await this.pool.request().query(query)
            const {recordset} = result
            return recordset
        }
        catch(error){
            throw new Error("There's an error in the Repository layer -- Session")
        }
    }
    async getSessionsByMedicalId(id){
        try{
            const query = `select * from dbo.sesiones where medico_id = ${id}`
            const result = await this.pool.request().query(query)
            const {recordset} = result
            return recordset
        }
        catch(error){
            throw new Error("There's an error in the Repository layer -- Session")
        }
    }
}

export default SessionRepository