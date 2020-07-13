import React from 'react'
import '../css/style.css'
import Layout from '../components/Layout'

const myApp = ({ Component, pageProps }) => {
    return (
        <div>
            <Layout>
            <Component {...pageProps}></Component>
            </Layout>
        </div>
    )
}
export default myApp