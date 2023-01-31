import axios from 'axios';
import React, { useState } from 'react'
import Quantity from '../Quantity/Quantity';
import { Button, CloseButton, Desc, H1, Image, MoreDetails, Name, Paragraph, Price, Success, Title, Wrapper } from './styles'

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
    const [success, setSuccess] = useState(false)
    const [form, setForm] = useState({
        name: null,
        pizza: title,
        price: 0,
        quantity: 1,
    })

    
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if(form.name !== null && form.price !== 0){
        await axios.post('http://localhost:8800/pizzas', {
          form
        })
      
        setSuccess(true)
      }
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
                {!success ?
                <>
                  <Name placeholder='Seu Nome' name='name' type='text' onChange={handleChange}/>
                  <Price onClick={()=>handlePrice(Mprice)}>M R$ {Mprice},00</Price>
                  <Price onClick={()=>handlePrice(Gprice)}>G R$ {Gprice},00</Price>
                  <Price onClick={()=>handlePrice(XGprice)}>XG R$ {XGprice},00</Price>
                  <Quantity total={total} setTotal={setTotal} handleQuantity={handleQuantity} />
                  <Button onClick={handleSubmit}>Confirmar</Button>
                  <CloseButton onClick={()=>setMoreDetails(false)}>X</CloseButton>
                </>
                :
                <Success>
                  <H1>Parabéns</H1>
                  <Paragraph>Seu pedido foi realizado com sucesso!</Paragraph>
                </Success>
                }
              </MoreDetails>
          }
        </Wrapper>
       
    </>
  )
}

export default Card