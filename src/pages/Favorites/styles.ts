import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

`

export const Content = styled.div`
    display: flex;
    flex-direction: column;

`

export const Title = styled.h1`
    font-weight: bolder;
    font-size: 20px;

`

export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    
    gap: 1rem;
    padding: 1rem;



`