import mongoose from "mongoose"

const { MONGO_URI, DB_NAME } = process.env

let connect = () => {
    mongoose.connect(MONGO_URI as string, { dbName: DB_NAME })
        .then(() => { console.log("Sucessfully connect to database") })
        .catch((err) => {
            console.log("Connect to database failed")
            console.log(err)
            process.exit(1)
        })
}

export default {
    connect
}