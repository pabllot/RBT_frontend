import React, { useEffect, useState } from 'react'
import { Container, P, Sign } from './styles'

interface Props {
    total: number;
    setTotal: Function;
    handleQuantity: Function;
  }

const Quantity = ({total, setTotal, handleQuantity}: Props) => {

  useEffect(() => {
    handleQuantity(total)
  }, [total])

  return (
    <Container>
        <Sign onClick={() => total > 1 && setTotal((prev: number) => prev - 1)}>-</Sign>
        <P>{total}</P>
        <Sign onClick={() => setTotal((prev: number) => prev + 1)}>+</Sign>
    </Container>
  )
}

export default Quantity