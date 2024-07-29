import UserRepository from "../repositories/UserRepository.js"
import {v2 as cloudinary} from "cloudinary"

class UserService{
    constructor(db){
        this.userRepository = new UserRepository(db)
    }
    async createUser(body, photoURL){
        try{
            await this.userRepository.createUserRepo(body, photoURL)
        }
        catch(error){
            console.log("Error in the Service Layer -- User", error)
            throw new Error("Error in the Servide Layer -- User")
        }
    }
    async uploadPhotoToCloudinary(file){
        try{
            cloudinary.config({
                cloud_name: process.env.CLOUD_NAME,
                api_key: process.env.API_KEY,
                api_secret: process.env.API_SECRET
            })

            const {secure_url} = await cloudinary.uploader.upload(file.tempFilePath)
            return secure_url
        }
        catch(error){
            console.log(error)
        }

    }
    async getUsers(){
        try{
            return await this.userRepository.getUsersRepo()
        }
        catch(error){
            console.log("Error in the Service Layer -- User", error)
            throw new Error("Error in the Servide Layer -- User")
        }

    }
    async getUserById(id){
        try{
            return await this.userRepository.getUserByIdRepo(id)
        }
        catch(error){
            console.log("Error in the Service Layer -- User", error)
            throw new Error("Error in the Servide Layer -- User")
        }
    }
    async deleteUserById(id){
        try{
            await this.userRepository.deleteUserByIdRepo(id)
        }
        catch(error){
            console.log("Error in the Service Layer -- User", error)
            throw new Error("Error in the Servide Layer -- User")
        }
    }
    async changeUserStatus(id){
        try{
            await this.userRepository.changeUserStatusRepo(id)
        }
        catch(error){
            console.log("Error in the Service Layer -- User", error)
            throw new Error("Error in the Servide Layer -- User")
        }
    }
    async validateUser(body){
        try{
            return await this.userRepository.validateUserRepo(body)
        }
        catch(error){
            console.log("Error in the Service Layer -- User", error)
            throw new Error("Error in the Servide Layer -- User")
        }
    }
    async searchPatient(body){
        try{
            return await this.userRepository.searchPatientRepo(body)
        }
        catch(error){
            console.log("Error in the Service Layer -- User", error)
            throw new Error("Error in the Servide Layer -- User")
        }
    }
}

export default UserService