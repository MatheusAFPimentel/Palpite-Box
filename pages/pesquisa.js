import React, { useState } from 'react'
import Link from 'next/link'
import { data } from 'autoprefixer'
import Head from 'next/head'


const Pesquisa = () => {
    const [form, setForm] = useState({
        Nome: '',
        Email: '',
        Whatsapp: '',
        Data: parseInt(data.nota)
    })
    const notas = [1, 2, 3, 4, 5]
    const [sucess, setSucess] = useState(false)
    const [retorno, setRetorno] = useState({})
    const save = async () => {
        try {
            const response = await fetch('/api/save', {
                method: 'POST',
                body: JSON.stringify(form)
            })
            const data = await response.json()
            setSucess(true)
            setRetorno(data)
        } catch (err) {

        }
    }

    const onChange = evt => {
        const value = evt.target.value
        const key = evt.target.name
        setForm(old => ({
            ...old,
            [key]: value
        }))
    }

    return (
        <div className='pt-6'>
            <Head>
                <title> Pesquisa - PalpiteBox</title>
            </Head>
            <h1 className='text-center font-bold my-4 text-2xl'> Criticas e Sugestões</h1>
            <p className='mt-6 text-center mb-6'>
                O estabelecimento sempre busca atender melhor seus clientes.<br />
                por isso, estamos sempre abertos a ouvir a sua opinião.
            </p>
            {!sucess && <div className='w-1/5 mx-auto'>
                <labe className='font-bold'> Registre-se.</labe>
                <input type='text' className='p-4 block shadow bg-blue-200 rounded my-2' placeholder='Nome' onChange={onChange} name='Nome' value={form.Nome} />
                <input type='text' className='p-4 block shadow bg-blue-200 rounded my-2' placeholder='Email' onChange={onChange} name='Email' value={form.Email} />
                <input type='text' className='p-4 block shadow bg-blue-200 rounded my-2' placeholder='WhatsApp' onChange={onChange} name='Whatsapp' value={form.Whatsapp} />
                <p className='font-bold mb-2'> Nota: </p>
                <div className='flex text-center'>
                {notas.map(nota => {
                    return (<label className='block w-1/6 font-bold'>
                        {nota}<input type='radio' name='Nota' value={nota} onChange={onChange}/>
                        </label>)
                })
                }
                </div>
                <button className='bg-blue-400 px-6 py-4 font-bold rounded-lg shadow-lg hover:shadow-sm' onClick={save}>Salvar</button>
                <Link href='/'>
                    <a className='bg-blue-400 px-6 py-4 font-bold rounded-lg shadow-lg hover:shadow-sm m-1'> Cancelar</a>
                </Link>
            </div>}
            {sucess && <div className='w-1/5 mx-auto'>
                <p className='mb-6 text-center bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert'> Obrigado por contribuir com sua sugestão ou critica.</p>
                {
                    retorno.showCoupon && <div className='text-center border p-4 mb-4'>
                        Seu cupom: <br />
                        <span className='font-bold text-2xl'>{retorno.Cupom}</span>
                    </div>
                }
                {
                    retorno.showCoupon && <div className='text-center border p-4 mb-4'>
                        <span className='font-bold block mb-2'>{retorno.Promo}</span>
                        <br />
                        Tire uma foto ou print desta tela e apresente no caixa.
                        </div>
                }
            </div>}
        </div>
    )
}

export default Pesquisa