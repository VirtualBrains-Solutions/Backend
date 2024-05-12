import queries from "../database/Queries.js";
import sql from "mssql"

class PlansRepository{
    constructor(db){
        this.pool = db
    }
    async createPlanRepo(body){
        try{
            await this.pool.request()
            .input("id", sql.Int, 1)
            .input("fecha_creacion", sql.Date, body.fecha_creacion)
            .input("especialista_id", sql.Int, body.especialista_id)
            .input("paciente_id", sql.Int, body.paciente_id)
            .query(queries.addNewPlan)
        }
        catch(error){
            console.log(error)
            throw new Error("There's an error in the plan repository", error)
        }

    }
    async getPlansByPatientIdRepo(id){
        try{
            const query = `select * from dbo.planes where paciente_id = ${id}`
            const result = await this.pool.request().query(query)
            const {recordset} = result
            return recordset
        }
        catch(error){
            console.log(error)
            throw new Error("There's an error in the plan repository", error)
        }
    }
    async getPlansByMedicalIdRepo(id){
        try{
            const query = `select * from dbo.planes where especialista_id = ${id}`
            const result = await this.pool.request().query(query)
            const {recordset} = result
            return recordset
        }
        catch(error){
            console.log(error)
            throw new Error("There's an error in the plan repository", error)
        }
    }

}

export default PlansRepository
