import express, { Request, Response } from "express"
import cors from "cors"
import { countries } from "./data"
import { country } from "./types";

const app = express()

app.use(cors()) // Evitar erros de cors em requisições
app.use(express.json()) // para quando receber um body, ele vem em json

app.listen(3003, () => {
    console.log("Server is online at http://localhost:3003.")
})

app.get('/countries', (req: Request, res: Response) => {
    res.status(200).send(countries)
    
    const results = countries.find(country => ({
    id: country.id,
    name: country.name
}))
if (results){
    res.status(200).send(results)
}
})



app.get('/countries/:id', (req: Request, res: Response) => {
    const result: country | undefined = countries.find(
        country => country.id === Number(req.params.id)
     )
     
     if (result) {
        res.status(200).send(result)
     } else {
        res.status(404).send("Not found")
     }
})

app.get('/countries/search', (req: Request, res: Response) => {
    let result: country[] = countries

    if (req.query.name) {
       result = result.filter(
          country => country.name.includes(req.query.name as string)
       )
       res.send(200).send(result)
    }
    
    if (req.query.capital) {
       result = result.filter(
          country => country.capital.includes(req.query.capital as string)
       )
       res.send(200).send(result)
    }
    
    if (req.query.continent) {
       result = result.filter(
          country => country.continent.includes(req.query.continent as string)
       )
       res.send(200).send(result)
    }
})
