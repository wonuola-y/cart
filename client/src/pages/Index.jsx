import React from 'react'
import { Link } from 'react-router-dom'
import DefaultWrapper from '../layouts/DefaultWrapper'

const Index = () => {
    return (
        <DefaultWrapper>
            <div className="text-red-500">
                <p>Index</p>
                <Link to="Cart">cart</Link>
            </div>
        </DefaultWrapper>
    )
}

export default Index
