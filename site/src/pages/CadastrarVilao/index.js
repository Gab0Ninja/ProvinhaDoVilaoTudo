import './index.scss'
import { useState } from 'react'


import { cadastrarVilao } from '../api/vilaoapi.js'

export default function Index() {
    const [nome, setNome] = useState('');
    const [maldades, setMaldades] = useState('');
    const [poder, setPoder] = useState(true);

    async function salvarClick() {
        try {

            const resp = await cadastrarVilao(nome, maldades, poder)
            alert('Vilao cadastrado com sucesso')
            setMaldades(resp)
            setNome(resp)
            setPoder(resp)
        }
        catch (err) {
            if (err.response) {
                alert(err.response.data.erro)
            }
            else {
                alert(err.message)
            }
        }
    }
    return (
        <main>
            <div className=''>

                <div className=''>
                    <section>
                        <h1 className=''><span>&nbsp;</span> Cadastrar Novo Vilão</h1>

                        <div className=''>
                            <div>
                                <div className=''>
                                    <label className=''>Nome: </label>
                                    <input className='' type='text' placeholder='Nome do Vilão' value={nome} onChange={a => setNome(a.target.value)} />
                                </div>
                                <br />
                                <div className=''>
                                    <label>Maldades: </label>
                                    <input className='' type='text' placeholder='Maldades do Vilão' value={maldades} onChange={a => setMaldades(a.target.value)} />
                                </div>

                                <br />
                                <div className=''>
                                    <input type='checkbox' checked={poder} onChange={a => setPoder(a.target.checked)} /> &nbsp; Tem Poder?
                                </div>
                            </div>
                            <div>

                                <div className=''>
                                    <label></label>
                                    <div className=''>
                                        <button className='' onClick={salvarClick}>salvar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="">
                        <a href="./consultar" className="">Consultar</a>
                    </div>
                </div>
            </div>
        </main>
    )
}