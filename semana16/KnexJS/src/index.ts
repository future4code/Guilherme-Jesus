import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import { connection } from './connection';

const app: Express = express();

app.use(express.json());
app.use(cors());



app.get("/", async (req, res) =>{
   const result = connection.raw("Show Tables")
   console.log(result);
   
   res.send("HELLO WORLD")
})

app.get("/actors", async (req,res)=>{
 try{
    
    const result = await connection.raw(`SELECT * FROM Actor WHERE name ="${name}"`)
    const actors = result [0]
    res.send(actors)

 } catch (error){
    console.log(error);
    res.status(500).send(error)
    
 }
})



const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});

