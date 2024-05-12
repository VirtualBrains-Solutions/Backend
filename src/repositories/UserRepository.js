import queries from "../database/Queries.js"
import sql from "mssql"
import generateId from "../helpers/GenerateId.js";

class UserRepository{
    constructor(db){
        this.pool = db

    }
    async createUserRepo(body){
        try{
            const id = generateId()
            await this.pool.request()
            .input("id", sql.Int, id)
            .input("nombre", sql.VarChar, body.nombre)
            .input("apellido", sql.VarChar, body.apellido)
            .input("fecha_nacimiento", sql.Date, body.fecha_nacimiento)
            .input("email", sql.VarChar, body.email)
            .input("password", sql.VarChar, body.password)
            .input("fecha_creacion", sql.Date, body.fecha_creacion)
            .input("img_url_profile", sql.VarChar, body.img_url_profile)
            .input("tipo_usuario", sql.VarChar, body.tipo_usuario)
            .query(queries.addNewUser)
        }
        catch(error){
            console.log("Error in the repository layer - User", error)
            throw new Error("Error in the repository layer - User")
        }
    }
    async getUsersRepo(){
        try{
            const query = "select * from dbo.Usuarios"
            const result = await this.pool.request().query(query)
            const {recordset} = result
            return recordset
        }
        catch(error){
            console.log("Error in the repository layer - User", error)
            throw new Error("Error in the repository layer - User")
        }
    }
}

export default UserRepository