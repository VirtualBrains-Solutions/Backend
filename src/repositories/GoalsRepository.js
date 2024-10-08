import queries from "../database/Queries.js"
import sql from "mssql"
import generateId from "../helpers/GenerateId.js"

class GoalsRepository{
    constructor(db){
        this.pool = db
    }
    async createGoalRepo(body){
        try{
            const id = generateId()
            await this.pool.request()
            .input("id", sql.Int, id)
            .input("plan_id", sql.Int, body.plan_id)
            .input("descripcion", sql.VarChar, body.descripcion)
            .input("estado_meta", sql.VarChar, body.estado_meta)
            .query(queries.addNewGoal)
        }
        catch(error){
            console.log(error)
            throw new Error("There's an error in the repo layer", error)
        }
    }
    async getGoalsByPlanIdRepo(id){
        try{
            const query = `select * from dbo.metas where plan_id = ${id}`
            const result = await this.pool.request().query(query)
            const {recordset} = result
            return recordset
        }
        catch(error){
            console.log(error)
            throw new Error("There's an error in the repo layer", error)
        }
    }
    async changeGoalStatusToCompleteByIdRepo(id){
        try{
            const query = `update dbo.metas set estado_meta = 'Completado' where id = ${id}`
            await this.pool.request().query(query)
        }
        catch(error){
            console.log(error)
            throw new Error("There's an error in the repo layer", error)
        }
    }
}

export default GoalsRepository