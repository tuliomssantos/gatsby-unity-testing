import React from 'react'
import Layout from "../layouts/layout"
import SEO from "../components/seo"
import TestAsync from "../components/TestAsync/TestAsync"

const testAsync = () => {
    return (
        <div>
            <SEO title="Home" />
            <TestAsync />
        </div>
    )
}

export default testAsync
