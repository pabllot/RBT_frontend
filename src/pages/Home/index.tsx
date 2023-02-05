import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '../../components/Card'
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
        <Card key={pizza.id} image={pizza.image} title={pizza.name} Mprice={pizza.small_price} Gprice={pizza.medium_price} XGprice={pizza.big_price} desc={pizza.ingredients} />
    ))}
    </Container>
  )
}

export default Home