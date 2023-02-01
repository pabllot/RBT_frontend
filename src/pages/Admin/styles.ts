import styled from "styled-components";

export const Container = styled.div`
    height: 90vh;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    gap: 80px;

    @media only screen and (max-width:700px) {
    
        flex-direction: column;
        align-items: center;

    }


`

export const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
    margin-top: 20px;
    gap: 8px;

`

export const Wrapper = styled.div`
    display: flex;
    gap: 6px;
    @media only screen and (max-width:700px) {
    
    flex-direction: column;
}
    
`

export const Title = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 35px;
    text-align: center;
    width: 450px;
    padding: 1px 8px;
    margin-top: 10px;
    margin-bottom: 5px;

    @media only screen and (max-width:700px) {
    
    font-size: 25px;
    width: 335px;
}
    
`

export const Paragraph = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    border-bottom: 2px solid gray;
`

export const ButtonComplete = styled.button`
    font-family: 'Poppins', sans-serif;
    background: #006400;
    border: none;
    padding: 2px;
    cursor: pointer;
    color: white;
`
export const ButtonCanceled = styled.button`
    font-family: 'Poppins', sans-serif;
    background: #8b0000;
    border: none;
    padding: 2px;
    cursor: pointer;
    color: white;
`
