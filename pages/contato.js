import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const contato = () => {
    return (
        <div>
            <Head>
                <title> Contatos - PalpiteBox</title>
            </Head>
            <h1> Contato </h1>
            <div>
                <Link href="/">
                    <a> Home </a>
                </Link>
            </div>
        </div>
    )
}

export default contato