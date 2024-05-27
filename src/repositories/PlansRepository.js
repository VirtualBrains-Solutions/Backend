import queries from "../database/Queries.js";
import sql from "mssql"
import generateId from "../helpers/GenerateId.js"

class PlansRepository{
    constructor(db){
        this.pool = db
    }
    async createPlanRepo(body){
        console.log(body)
        try{
            const id = generateId()
            await this.pool.request()
            .input("id", sql.Int, id)
            .input("fecha_creacion", sql.Date, body.fecha_creacion)
            .input("especialista_id", sql.Int, body.especialista_id)
            .input("paciente_id", sql.Int, body.paciente_id)
            .input("descripcion_plan", sql.VarChar, body.descripcion_plan)
            .input("nombre_plan", sql.VarChar, body.nombre_plan)
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
            const query = `select * from dbo.planes DP
            inner join dbo.usuarios DU on 
            DP.paciente_id = DU.id
            where especialista_id = ${id}`
            const result = await this.pool.request().query(query)
            const {recordset} = result
            return recordset
        }
        catch(error){
            console.log(error)
            throw new Error("There's an error in the plan repository", error)
        }
    }
    async deleteAllPlansByPatientIdRepo(id){
        try{
            const query = `delete from dbo.planes where paciente_id = ${id}`
            await this.pool.request().query(query)
        }
        catch(error){
            console.log(error)
            throw new Error("There's an error in the plan repository", error)
        }
    }
    async getInfoPlanByIdRepo(id){
        try{
            const query = `select * from dbo.planes DP
            inner join dbo.usuarios DU on 
            DP.paciente_id = DU.id
            where DP.id = ${id}`
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
