import queries from "../database/Queries.js"
import sql from "mssql"

class GoalsRepository{
    constructor(db){
        this.pool = db
    }
    async createGoalRepo(body){
        try{
            await this.pool.request()
            .input("id", sql.Int, 1)
            .input("plan_id", sql.Int, body.plan_id)
            .input("descripcion", sql.VarChar, body.descripcion)
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

}

export default GoalsRepository