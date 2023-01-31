import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '../../components/Card/Card'
import { Container } from './styles';

const Home = () => {
    const [allPizzas, setAllPizzas] = useState([])

useEffect(() => {
    const fetchAllPizzas = async () => {
        try {
            const res = await axios.get('http://localhost:8800/pizzas')
            setAllPizzas(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    
    fetchAllPizzas()
},[])
  return (
    <Container>
    {allPizzas?.map((pizza: any) => (
        <Card key={pizza.id} image={pizza.image} title={pizza.name} price={pizza.small_price} desc={pizza.ingredients} id={pizza.id}/>
    ))}
    </Container>
  )
}

export default Home