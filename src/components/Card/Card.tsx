import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Desc, Image, MoreDesc, MoreDetails, MoreImage, Price, Title, Wrapper } from './styles'
import logo from '/logo.png'

interface Props {
    image: string;
    title: string;
    price: number;
    desc: string;
    id: number
  }
  

const Card = ({image, title, price, desc, id}: Props) => {
    const [moreDetails, setMoreDetails] = useState(false)
    const [pizzaId, setPizzaId] = useState<number>()

    return (
    <>
        <Wrapper>
            <Image src={image} />
            <Title >{title}</Title>
            <Desc>{desc}</Desc>
            <Price>R$ {price},00</Price>
            <Button onClick={()=> setPizzaId(id)}>Mais Detalhes</Button>
        </Wrapper>
       
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