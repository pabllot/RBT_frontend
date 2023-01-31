import React, { useState } from 'react'
import { Container, P, Sign } from './styles'

interface Props {
    total: number;
    setTotal: any;
  }

const Quantity = ({total, setTotal}: Props) => {

  return (
    <Container>
        <Sign onClick={() => total > 1 && setTotal((prev: number) => prev - 1)}>-</Sign>
        <P>{total}</P>
        <Sign onClick={() => setTotal((prev: number) => prev + 1)}>+</Sign>
    </Container>
  )
}

export default Quantity