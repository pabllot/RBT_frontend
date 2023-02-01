import axios from 'axios'
import { GoTrashcan } from 'react-icons/go'
import { IoMdDoneAll } from 'react-icons/io'
import { FcCancel } from 'react-icons/fc'
import React, { useEffect, useState } from 'react'
import { ButtonCanceled, ButtonComplete, Container, Section, Paragraph, Title, Wrapper, WrapperOngoing, ButtonWrapper } from './styles'

const Admin = () => {
  const [allOrders, setAllOrders] = useState([])

  useEffect(() => {
    const fetchAllOrders = async () => {
      try {
          const res = await axios.get('http://localhost:8800/pedidos')
          setAllOrders(res.data)
      } catch (error) {
          console.log(error)
      }}      
    fetchAllOrders()
  },[allOrders])

  const pizzaSize = (price: number) => {
    if(price < 45) return 'M';
    else if(price > 45 && price < 65 ) return 'G'
    else return 'XG'
  }

  const handleCancel = async (id: number) => {
    await axios.post('http://localhost:8800/pedidos/cancelados', {
          id
        })
  }
  const handleComplete = async (id: number) => {
    await axios.post('http://localhost:8800/pedidos/concluidos', {
          id
        })
  }
  const handleDelete = async (id: number) => {
    await axios.post('http://localhost:8800/pedidos/delete', {
          id
        })
  }

  return (
    <Container>
      <Section>
        <Title style={{background: '#0F7308'}}>Pedidos em Andamento</Title>
        {allOrders.filter((orderr: any) => orderr.status === 1).map((order: any) => (
        <WrapperOngoing>
          <Paragraph>{order.name} - {order.quantity} {order.pizza}-{pizzaSize(order.price)} Total: R${order.price * order.quantity},00</Paragraph> 
          <ButtonWrapper>
            <ButtonComplete onClick={()=>handleComplete(order.id)}><IoMdDoneAll/></ButtonComplete>
            <ButtonCanceled onClick={()=>handleCancel(order.id)}><FcCancel/></ButtonCanceled>
          </ButtonWrapper>
        </WrapperOngoing>
    ))}
      </Section>

      <Section>
        <Title style={{background: '#0F7308'}}>Pedidos Concluídos</Title>
        {allOrders.filter((orderr: any) => orderr.status === 2).map((order: any) => (
        <Wrapper>
          <Paragraph>{order.name} - {order.quantity} {order.pizza}-{pizzaSize(order.price)} Total: R${order.price * order.quantity},00</Paragraph>
          <ButtonCanceled onClick={()=>handleDelete(order.id)}><GoTrashcan/></ButtonCanceled>          
        </Wrapper>
    ))}
    </Section>

    <Section>
        <Title style={{background: '#a93335'}}>Pedidos Cancelados</Title>
        {allOrders.filter((orderr: any) => orderr.status === 3).map((order: any) => (
        <Wrapper>
          <Paragraph>{order.name} - {order.quantity} {order.pizza}-{pizzaSize(order.price)} Total: R${order.price * order.quantity},00</Paragraph>
          <ButtonCanceled  onClick={()=>handleDelete(order.id)}><GoTrashcan/></ButtonCanceled>  
        </Wrapper>
    ))}
      </Section>
    </Container>
  )
}

export default Admin