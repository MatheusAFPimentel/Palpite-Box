import React from 'react'
import styles from '../Header/styles.module.css'
import Link from 'next/link'
const Header = () => {
    return (
        <React.Fragment>
            <div className={styles.wrapper}>
                <div className='container mx-auto'>
                    <Link href="/">
                        <a><img src='/logo_palpitebox.png' alt='PalpiteBox' className='mx-auto h-8 sm:h-12 md:h-16 lg:h-20 xl:h-24 w-32' /></a>
                    </Link>
                </div>
            </div>
            <div className="bg-gray-300 p-4 shadow-md text-center">
                <Link href="/sobre">
                    <a className="px-2 hover:underline">Sobre</a>
                </Link>
                <Link href="/contato">
                    <a className="px-2 hover:underline">Contato</a>
                </Link>
                <Link href="/pesquisa">
                    <a className="px-2 hover:underline">Pesquisa</a>
                </Link>
            </div>
        </React.Fragment>
    )
}

export default Header