import React, {useState } from 'react'
import { Button, Desc, Image, MoreDetails, MorePrice, Price, Title, Wrapper } from './styles'

interface Props {
    image: string;
    title: string;
    Mprice: number;
    Gprice: number;
    XGprice: number;
    desc: string;
    id: number
  }
  

const Card = ({image, title, Mprice, XGprice, Gprice, desc, id}: Props) => {
    const [moreDetails, setMoreDetails] = useState(false)
    const [pizzaSize, setPizzaSize] = useState(Mprice)

    return (
    <>
        <Wrapper>
            <Image src={image} />
            <Title >{title}</Title>
            <Desc>{desc}</Desc>
            {!moreDetails && <Price>R$ {Mprice},00</Price>}
            {!moreDetails && <Button onClick={()=>setMoreDetails(true)}>Mais Detalhes</Button>}
    {moreDetails && 
        <MoreDetails>
            <MorePrice onClick={()=>setPizzaSize(Mprice)}>M R$ {Mprice},00</MorePrice>
            <MorePrice onClick={()=>setPizzaSize(Gprice)}>G R$ {Gprice},00</MorePrice>
            <MorePrice onClick={()=>setPizzaSize(XGprice)}>XG R$ {XGprice},00</MorePrice>
            <Button onClick={()=>setMoreDetails(false)}>Fechar</Button>
        </MoreDetails>
    }
        </Wrapper>
       
    </>
  )
}

export default Card