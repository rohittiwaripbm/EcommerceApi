import mongoose from "mongoose";

const DbUrl = process.env.DB_URL;
export const DBConnect = async()=>
    {
        try {
            await mongoose.connect(DbUrl);
            console.log('connect to mongoDb')
        } catch (error) {
            console.log('unable to connect to database')
        }
    }