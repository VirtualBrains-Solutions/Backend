import express from "express"

class Server{
    constructor(){
        this.app = express()
        this.port = process.env.PORT
    }
    async listen(){
        this.app.listen(this.port, () => {
            console.log(`Running on port ${this.port}`)
        })
    }


}

export default Server