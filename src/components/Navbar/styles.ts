import styled from 'styled-components'

export const Container = styled.div`
    height: 10vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: #00070A;
    display: flex;
    align-items: center;
    justify-content: space-around;
    z-index: 999;
`

export const Image = styled.img`
    width: 60px;
    height: 60px;
    object-fit: contain;
    margin-left: 30px;
`

export const Title = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: 25px;
    font-weight: 500;
    color: white;
`

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`

export const AdminIcon = styled.div`
    font-size: 30px;
    color: white;
`

export const NavLink = styled.a`
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    font-size: 17px;
    color: white;
    font-weight: 300;
`