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

   const searchActor = async (name: string): Promise<any> => {
      const result = await connection.raw(`
        SELECT * FROM Actor WHERE name = "${name}"
      `)
      return result
   }



const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});

