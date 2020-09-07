import React from 'react'
import Layout from "../layouts/layout"
import SEO from "../components/seo"
import TestElements from '../components/TestElements/TestElements'

const testElements = () => {
    return (
        <div>
            <SEO title="Home" />
            <TestElements />
        </div>
    )
}

export default testElements
