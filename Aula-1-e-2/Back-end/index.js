//// API  (application programming interface)
//importamos o express
const express = require('express')
const crypto = require('crypto')
const cors = require('cors')

//inicializa um servidor web com express
const app = express();

// fala pro express utilizar o middleware para trabalharmos com json
app.use(express.json());

//uso o middleware para resolver o problema de cors na integração do front com o back
app.use(cors())

//criar uma lista de tarefas

const tarefas = [
    {
        id: crypto.randomUUID(),
        text: 'ir ao mercado',
        prazo: '2 dias'
    },
    {
        id: crypto.randomUUID(),
        text: 'estudar sobre git',
        prazo: '3 dias'
    },
    {
        id: crypto.randomUUID(),
        text: 'estudar sobre git',
        prazo: '5 dias'
    }
]
//Rest - GET/POST/PUT/DELETE
app.get('/', (req, res) => {

    return res.send('olá galera')
})


//rota que lista todas as tarefas pré cadastradas
app.get('/tarefas', (req, res) => {
    res.send(tarefas);
})

//rota que busca por uma tarefa específica

app.get('/tarefas/:id', (req, res) => {
    const { id } = req.params
    const tarefa = tarefas.find((tarefa) => tarefa.id === id)
    res.send(tarefa)
})


//defino uma porta de reder para rodar meu servidor web
app.listen(3000, () => {
    console.log('projeto rodando na porta 3000')
})