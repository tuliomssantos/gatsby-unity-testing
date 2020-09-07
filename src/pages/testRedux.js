import React from 'react'
import Layout from "../layouts/layout"
import SEO from "../components/seo"
import TestRedux from '../components/TestRedux/TestRedux'


const testRedux = () => {
    

    return (
        <div>
            <SEO title="Home" />
            <TestRedux />
        </div>
    )
}

export default testRedux