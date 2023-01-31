import axios from 'axios';
import React, { useState } from 'react'
import Quantity from '../Quantity/Quantity';
import { Button, CloseButton, Desc, Image, MoreDetails, Name, Price, Title, Wrapper } from './styles'

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
    const [total, setTotal] = useState(1)
    const [form, setForm] = useState({
        name: '',
        pizza: title,
        price: 0,
        quantity: 1,
        total: 0,
    })

    
    const handleSubmit = async (e: any) => {
        e.preventDefault();

        await axios.post('http://localhost:8800/pizzas', {
          form
        })

    }

    const handleChange = (e: any) => {
        setForm({...form, [e.target.name]: e.target.value})
      }
    
    const handlePrice = (price: number) => {
    setForm({...form, price: price})      
    }

    const handleQuantity = (qtd: number) => {
        setForm({...form, quantity: qtd})  
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
                  <Price onClick={()=>handlePrice(Mprice)}>M R$ {Mprice},00</Price>
                  <Price onClick={()=>handlePrice(Gprice)}>G R$ {Gprice},00</Price>
                  <Price onClick={()=>handlePrice(XGprice)}>XG R$ {XGprice},00</Price>
                  <Quantity total={total} setTotal={setTotal} handleQuantity={handleQuantity} />
                  <Name placeholder='Nome' name='name' type='text' defaultValue={form.name} onChange={handleChange}/>
                  <Button onClick={handleSubmit}>Confirmar</Button>
                  <CloseButton onClick={()=>setMoreDetails(false)}>X</CloseButton>
              </MoreDetails>
          }
        </Wrapper>
       
    </>
  )
}

export default Card