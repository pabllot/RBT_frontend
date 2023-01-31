import styled from "styled-components";

export const Wrapper =  styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 24px;
gap: 15px;
width: 304px;
height: 462px;

background: #00070A;
border: 1px solid #000204;
border-radius: 8px;

color: white;

margin-top: 20px;

`
export const Image = styled.img`
    width: 176px;
    height: 176px;
    object-fit: contain;
`

export const Title = styled.h1`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 140%;

text-align: center;


color: #E1E1E6;
`

export const Desc = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 160%;

text-align: center;


color: #C4C4CC;

`

export const Price = styled.p`

font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 32px;
line-height: 160%;

text-align: center;


color: #82F3FF;
`

export const Button = styled.button`
font-family: 'Poppins';
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 12px 24px;
gap: 8px;

width: 92px;
height: 48px;



background: #750310;
border-radius: 5px;
color: white;

cursor: pointer;

`
export const MoreDetails = styled.div`
    position: absolute;
    height: 70vh;
    width: 100%;
    background: #00070A;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    `

export const MoreImage = styled.img``

export const MoreDesc = styled.div``