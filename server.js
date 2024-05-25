import app from "./index.js";
import { DBConnect } from "./src/config/dbConfig.js";
const Port = process.env.PORT;
app.listen(Port, async()=>{
    await DBConnect();
    console.log("http://localhost:"+Port);
});