import UserRepository from "../repositories/UserRepository.js"

class UserService{
    constructor(db){
        this.userRepository = new UserRepository(db)
    }
    async createUser(body){
        try{
            await this.userRepository.createUserRepo(body)
        }
        catch(error){
            console.log("Error in the Service Layer -- User", error)
            throw new Error("Error in the Servide Layer -- User")
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
}

export default UserService