import React from 'react'
import Layout from '../Layout'
import Introduction from '../Components/Introduction'
import styled from 'styled-components'

const Container = styled.div`
/* overflow-x:hidden; */
`
const Home = () => {
    return (
        <Container >
            <Layout >
                <Introduction />
                Jai SreeANJANEYA
            </Layout >
        </Container>
    )
}

export default Home
