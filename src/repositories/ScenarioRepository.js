import sql from "mssql"
import queries from "../database/Queries.js"
import generateId from "../helpers/GenerateId.js"

class ScenarioRepository{
    constructor(db){
        this.pool = db
    }
    async createScenarioRepo(body){
        try{
            const id = generateId()
            await this.pool.request()
            .input("id", sql.Int,id)
            .input("nombre_escenario", sql.VarChar, body.nombre_escenario)
            .input("num_likes", sql.Int, body.num_likes)
            .input("num_dislikes", sql.Int, body.num_dislikes)
            .input("img_url", sql.VarChar, body.img_url)
            .query(queries.addNewScenario)
        }
        catch(error){
            console.log(error)
            throw new Error("There's an error in the repository layer - Scenario", error)
        }

    }
    async getAllScenariosRepo(){
        try{
            const query = "select * from dbo.escenarios"
            const result = await this.pool.request().query(query)
            const {recordset} = result
            return recordset
        }
        catch(error){
            throw new Error("There's an error in the repository layer - Scenario", error)
        }
    }
    async getScenarioByIdRepo(id){
        try{
            const query = `select * from dbo.escenarios where id = ${id}`
            const result = await this.pool.request().query(query)
            const {recordset} = result
            return recordset
        }
        catch(error){
            throw new Error("There's an error in the repository layer - Scenario", error)
        }
    }
}

export default ScenarioRepository