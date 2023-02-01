import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height:90vh;
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

export const WrapperOngoing = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 440px;
    background-color: white;
    color: #8b0000;    
    gap: 6px;
    @media only screen and (max-width:700px) {
    
    flex-direction: column;
    width: 335px;
}
    
`
export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 440px;
    background-color: white;
    color: #8b0000;
    
    gap: 6px;
    @media only screen and (max-width:700px) {
    
    flex-direction: column;
    width: 335px;

}
    
`

export const Title = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 35px;
    text-align: center;
    width: 440px;
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
    font-weight: 500;
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
export const ButtonWrapper = styled.div`
    display: flex;

    @media only screen and (max-width:700px) {
    
    gap: 5px;
    margin-bottom: 5px;
}
`