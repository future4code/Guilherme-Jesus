import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import { connection } from './connection';

const app: Express = express();

app.use(express.json());
app.use(cors());

//1

const searchActor = async (name: string): Promise<any> => {
   const result = await connection.raw(`
     SELECT * FROM Actor WHERE name = "${name}"
   `)
   return result
 };

 const countActors = async (gender: string): Promise<any> => {
   const result = await connection.raw(`
     SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
   `);
   const count = result[0][0].count;
   return count;
 };

//2

const updateActor = async (id: string, salary: number): Promise<any> => {
   await connection("Actor")
     .update({
       salary: salary,
     })
     .where("id", id);
 };

 const deleteActor = async (id: string): Promise<void> => {
   await connection("Actor")
     .delete()
     .where("id", id);
 }; 

 const avgSalary = async (gender: string): Promise<any> => {
   const result = await connection("Actor")
     .avg("salary as average")
     .where({ gender });
 
   return result[0].average;
 };


 //3
 app.get("/actor", async (req: Request, res: Response) => {
   try {
     const count = await countActors(req.query.gender as string);
     res.status(200).send({
       quantity: count,
     });
   } catch (err) {
     res.status(400).send({
       message: err.message,
     });
   }
 });

 //4
 app.put("/actor", async (req, res) => {
   try {
     await updateSalary(req.body.id, req.body.salary);
     res.status(200).send({
       message: "Success",
     });
   } catch (err) {
     res.status(400).send({
       message: err.message,
     });
   }
 });

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});

