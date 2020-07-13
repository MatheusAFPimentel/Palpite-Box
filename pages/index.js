import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import Head from 'next/head'


const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {
    const { data, error } = useSWR('/api/get-promo', fetcher)
    return (
        <div>
            <Head>
                <title> Seja bem-vindo </title>
            </Head>
            <p className='mt-6 text-center'>
                O estabelecimento sempre busca atender melhor seus clientes.<br />
                por isso, estamos sempre abertos a ouvir a sua opinião.
            </p>
            <div className='text-center my-12'>
                <Link href='/pesquisa'>
                    <a className='bg-blue-400 px-6 py-4 font-bold rounded-lg shadow-lg hover:shadow-sm'> Dar opinião ou sugestão</a>
                </Link>
            </div>
            {!data && <p> Carregando... </p> }
            {!error && data && data.showCoupon &&
                <p className='mt-6 text-center'>
                    {data.message}
            </p>
            }
        </div>
    )
}

export default Index