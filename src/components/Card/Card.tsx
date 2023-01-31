import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Desc, Image, MoreDesc, MoreDetails, MoreImage, Price, Title, Wrapper } from './styles'
import logo from '/logo.png'

const Card = () => {
    const [allPizzas, setAllPizzas] = useState([])
    const [moreDetails, setMoreDetails] = useState(false)

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
    <>
    {allPizzas?.map((pizza: any) => (
        <Wrapper>
            <Image src={pizza.image} />
            <Title key={pizza.id}>{pizza.name}</Title>
            <Desc>{pizza.ingredients}</Desc>
            <Price>R$ {pizza.small_price},00</Price>
            <Button>Mais Detalhes</Button>
        </Wrapper>
    ))}
    {moreDetails && 
        <MoreDetails>
            <MoreImage src={logo}/>
            <MoreDesc></MoreDesc>
        </MoreDetails>
    }
    </>
  )
}

export default Card