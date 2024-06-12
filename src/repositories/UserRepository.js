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
            .input("img_url_profile", sql.VarChar, "https://res.cloudinary.com/dkngigwfp/image/upload/v1718170429/pngtree-outline-user-icon-png-image_5045523_zca7x3.jpg")
            .input("tipo_usuario", sql.VarChar, body.tipo_usuario)
            .input("estado_usuario", sql.VarChar, "Activo")
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
    async getUserByIdRepo(id){
        try{
            const query = `select * from dbo.Usuarios where id = ${id} `
            const result = await this.pool.request().query(query)
            const {recordset} = result
            return recordset
        }
        catch(error){
            console.log("Error in the repository layer - User", error)
            throw new Error("Error in the repository layer - User")
        }
    }
    async deleteUserByIdRepo(id){
        try{
            const query = `delete from dbo.Usuarios where id = ${id}`
            await this.pool.request().query(query)
        }
        catch(error){
            console.log("Error in the repository layer - User", error)
            throw new Error("Error in the repository layer - User")
        }
    }
    async changeUserStatusRepo(id){
        try{
            const query = `update dbo.Usuarios set estado_usuario = 'Eliminado' where id = ${id}`
            await this.pool.request().query(query)
        }
        catch(error){
            console.log("Error in the repository layer - User", error)
            throw new Error("Error in the repository layer - User")
        }
    }
    async validateUserRepo(body){
        try{
            const query = `select * from dbo.Usuarios where email = '${body.email}' and password = '${body.password}'`
            const result = await this.pool.request().query(query)
            const {recordset} = result
            return recordset
        }
        catch(error){
            console.log("Error in the repository layer - User", error)
            throw new Error("Error in the repository layer - User")
        }
    }
    async searchPatientRepo(body){
        try{
            const query = `select * from dbo.Usuarios where email = '${body.email}'`
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