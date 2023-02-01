import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height:90vh;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    gap: 50px;

    @media only screen and (max-width:1400px) {    
        flex-direction: column;
        align-items: center;
    }
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
    margin-bottom: 20px;
    gap: 1px;
`

export const WrapperOngoing = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 440px;
    background-color: white;
    color: #8b0000;    
    gap: 6px;
    padding-left: 4px;
    border-bottom: 1px solid gray;

    box-shadow: rgba(255,255,255, 0.3) 0px 1px 3px, black 1px 1px 1px;

    @media only screen and (max-width:700px) {    
    flex-direction: column;
    width: 335px;
}
    
`
export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 440px;
    background-color: white;
    color: #8b0000;
    gap: 6px;
    padding-left: 4px;
    box-shadow: rgba(255,255,255, 0.3) 0px 1px 3px, black 1px 1px 1px;

    @media only screen and (max-width:700px) {    
    flex-direction: column;
    width: 335px;
    padding-bottom: 4px;
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
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;

    box-shadow: rgba(255,255,255, 0.3) 0px 1px 3px, black 1px 1px 1px;

    @media only screen and (max-width:700px) {    
    font-size: 25px;
    width: 335px;
}
    
`

export const Paragraph = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    font-weight: 500;
    color: black;
    min-height: 20px;
`

export const ButtonComplete = styled.button`
    font-family: 'Poppins', sans-serif;
    background: white;
    border: none;
    padding: 2px;
    cursor: pointer;
    color: green;
    margin-left: 2px;
    width: 25px;
    height: 25px;
    font-size: 17px;
`
export const ButtonCanceled = styled.button`
    font-family: 'Poppins', sans-serif;
    background: white;
    border: none;
    padding: 2px;
    cursor: pointer;
    color: #A93335;
    width: 25px;
    height: 25px;
    font-size: 17px;

`
export const ButtonWrapper = styled.div`
    display: flex;
    background: #1E1E1E;
    background-color: white;
    

    @media only screen and (max-width:700px) {    
    gap: 5px;
    margin-bottom: 5px;
    background: white;
}
`