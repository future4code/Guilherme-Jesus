import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";


const app: Express = express();
app.use(express.json());
app.use(cors());

type user = {
    id: number,
    nome: string,
    cpf: number,
    dataDeNascimento: number
}

type gasto = {
    data: number,
    valor: number,
    descricao: string
}

let users: user[] = [
    {
        id: 1,
        nome: "Guilherme",
        cpf: 33340536520,
        dataDeNascimento: 10041996
    },
    {
        id: 2,
        nome: "Jon Jones",
        cpf: 33340536521,
        dataDeNascimento: 10051999
    },
    {
        id: 3,
        nome: "Charles Xavier",
        cpf: 33340536522,
        dataDeNascimento: 10061998
    },
]

app.get('/users', (req: Request, res: Response) => {
    let errorCode : number = 400
    try {
        const lista = users.find(user => ({ id: user.id, nome: user.nome }))
        if (!lista) {
            errorCode = 404
            throw new Error('Usuario não encontrado')
        } 
        res.status(200).send(users)
    } catch (error) {
       res.status(errorCode).send({message: error})
    }

})

app.post('/sign',(req: Request ,res: Response)=>{
    let errorCode : number = 400
    try{
    



        
    }catch(error){

    }
})



const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});