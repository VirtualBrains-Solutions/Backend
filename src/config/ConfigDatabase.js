import sql from "mssql"

const connectDatabase = async () => {
    try{
        const dbSettings = {
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            server: process.env.DB_SERVER,
            database: process.env.DB_DATABASE,
            pool:{
              max: 100,
              min: 0,
              idleTimeoutMillis: 600000
            },
            options: {
              encrypt: true, // for azure -- Ver
              trustServerCertificate: true, // change to true for local dev / self-signed certs
            },
          };
        const pool = await sql.connect(dbSettings);
        console.log("Database connected!")
        return pool;
    }
    catch(error){
        console.log("Error in the database:",error)
    }
}

export default connectDatabase