import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function cadastrarVilao(nome, maldades, poder){
    const resp = await api.post('/vilao', {
        nome: nome,
        maldades: maldades,
        poder: poder
    })

    return resp.data;
}

export async function ListarTodosViloes(){
    const resposta = await api.get('/vilao')
    return resposta.data;
}