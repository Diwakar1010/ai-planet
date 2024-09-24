import React from 'react'
import ListPage from './ListPage'
import FilterPage from './FilterPage'
import CardSection from './CardSection'

const Home = () => {
    return (
        <div>
            <ListPage />
            <CardSection/>
            <FilterPage />
        </div>
    )
}

export default Home