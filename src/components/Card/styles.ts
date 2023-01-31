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
margin-bottom: 30px;

`
export const Image = styled.img`
    width: 176px;
    object-fit: contain;
    border-radius: 50%;
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
width: 90%;

`

export const Button = styled.button`
font-family: 'Poppins';
font-size: 14px;
font-weight: 500;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 12px 24px;

width: 50%;
height: 35px;

background: #750310;
border-radius: 5px;
color: white;
border: none;


cursor: pointer;
`
export const MoreDetails = styled.div`
    background: #00070A;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    width: 304px;
    background: #00070A;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 4px;
    position: relative;
    padding-bottom: 10px;
    `
export const CloseButton = styled.button`
font-family: 'Poppins';
display: flex;
justify-content: center;
align-items: center;
padding: 10px 10px;

width: 5px;
height: 5px;
font-size: 14px;
font-weight: 700;


background: white;
border-radius: 50%;
color: #750310;
border: none;

cursor: pointer;

position: absolute;
right: 7px;
top: 3px;
`

export const Price = styled.button`
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 30px;
    background: white;
    cursor: pointer;
    border-radius: 5px;
    color: #750310;
    border: none;


    &:focus {
        background: green;
        color: white;
    }
`

export const Name = styled.input`
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    outline: none;
    width: 50%;
    height: 30px;
    border: none;
    border-radius: 3px;
    padding: 2px;
`

export const Success = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    background-color: black;
    border: 2px solid white;
    border-radius: 20px;
    margin-top: 15px;
`

export const H1 = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    color: white;
    text-align: center;
    padding-top: 15px;
`
export const Paragraph = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: px;
    color: white;
    text-align: center;
    padding: 15px;
    
`