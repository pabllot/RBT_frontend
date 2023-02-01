import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Ongoing, Wrapper } from './styles'

const Admin = () => {
  const [allOrders, setAllOrders] = useState([])

  useEffect(() => {
      const fetchAllOrders = async () => {
          try {
              const res = await axios.get('http://localhost:8800/pedidos')
              setAllOrders(res.data)
          } catch (error) {
              console.log(error)
          }
      }
      
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

  return (
    <Container>
      <Ongoing>
        <h1 style={{background: 'black'}}>Pedidos em Andamento</h1>
        {allOrders.filter((orderr: any) => orderr.status === 1).map((order: any) => (
        <Wrapper>
          <p>{order.name} {order.pizza} {pizzaSize(order.price)} qtd: {order.quantity} total: {order.price * order.quantity}</p>
          <button onClick={()=>handleComplete(order.id)}>Concluído</button>
          <button onClick={()=>handleCancel(order.id)}>Cancelar</button>
        </Wrapper>
    ))}
      </Ongoing>
      <Ongoing>
        <h1 style={{background: 'green'}}>Pedidos Concluídos</h1>
        {allOrders.filter((orderr: any) => orderr.status === 2).map((order: any) => (
        <Wrapper>
          <p>{order.name} {order.pizza} {pizzaSize(order.price)} qtd: {order.quantity} total: {order.price * order.quantity}</p>          
        </Wrapper>
    ))}
 
        <h1 style={{background: 'red'}}>Pedidos Cancelados</h1>
        {allOrders.filter((orderr: any) => orderr.status === 3).map((order: any) => (
        <Wrapper>
          <p>{order.name} {order.pizza} {pizzaSize(order.price)} qtd: {order.quantity} total: {order.price * order.quantity}</p>
        </Wrapper>
    ))}
      </Ongoing>
    </Container>
  )
}

export default Admin