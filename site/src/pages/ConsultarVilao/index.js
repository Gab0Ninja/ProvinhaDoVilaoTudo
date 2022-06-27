import './index.scss'
import { useEffect, useState } from 'react';

import { ListarTodosViloes } from '../api/vilaoapi.js'


export default function Index() {
    const [vilao, setVilao] = useState([]);

    async function carregarTodosOsViloes() {
        const resp = await ListarTodosViloes();
        setVilao(resp);
    }

    useEffect(() => {
        carregarTodosOsViloes();
    }, [])
    return (
        <main className=''>

            <div className=''>


                <div className=''>
                    <div className="">
                        <a href="./cadastrar" className="">Voltar</a>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Identificaçao</th>
                                <th>Nome</th>
                                <th>Maldades</th>
                                <th>Poder</th>
                            </tr>
                        </thead>
                        <tbody>


                            {vilao.map(item =>
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.nome}</td>
                                    <td>{item.maldades}</td>
                                    <td>{item.pod ? 'Sim' : 'Não'}</td>

                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    )
}