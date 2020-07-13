import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/pageTitle'

const contato = () => {
    return (
        <div>
            <PageTitle title='Cont'/>
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