import React from 'react'
import Layout from "../layouts/layout"
import SEO from "../components/seo"
import TestEvents from '../components/TestEvents/TestEvents'

const testEvents = () => {
    return (
        <div>
            <SEO title="Home" />
            <TestEvents />
        </div>
    )
}

export default testEvents
