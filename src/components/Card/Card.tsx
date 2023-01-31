import React, {useEffect, useState } from 'react'
import Quantity from '../Quantity/Quantity';
import { Button, CloseButton, Desc, Image, Input, MoreDetails, MorePrice, Price, Title, Wrapper } from './styles'

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
    const [total, setTotal] = useState(1)
    const [name, setName] = useState('')
    const [form, setForm] = useState({
        name: '',
        pizzaId: 1,
        price: 0,
        quantity: 1
    })

    
    const handleSubmit = (e: any) => {
        e.preventDefault();
        setForm({
            name: name,
            pizzaId: id,
            price: pizzaSize,
            quantity: total
        })
    }



    return (
    <>
        <Wrapper>
            <Image src={image} />
            <Title >{title}</Title>
            <Desc>{desc}</Desc>
            {!moreDetails && <Button onClick={()=>setMoreDetails(true)}>Ver mais</Button>}
    {moreDetails && 
        <MoreDetails>
            <MorePrice onClick={()=>setPizzaSize(Mprice)}>M R$ {Mprice},00</MorePrice>
            <MorePrice onClick={()=>setPizzaSize(Gprice)}>G R$ {Gprice},00</MorePrice>
            <MorePrice onClick={()=>setPizzaSize(XGprice)}>XG R$ {XGprice},00</MorePrice>
            <Quantity total={total} setTotal={setTotal} />
            <Input placeholder='Nome' type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
            <Button onClick={handleSubmit}>Confirmar</Button>
            <CloseButton onClick={()=>setMoreDetails(false)}>X</CloseButton>
        </MoreDetails>
    }
        </Wrapper>
       
    </>
  )
}

export default Card