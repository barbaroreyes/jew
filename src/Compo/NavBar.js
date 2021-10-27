import React from 'react';
import styled from 'styled-components';


const Container =  styled.div`
height: 60px;
`

const  Wrapper =  styled.div`
 padding: 10px 20px ;
 border: 2px solid black ;
 display:flex;
 justify-content: space-between;
`
const Left =  styled.div`
 padding: 10px 20px 
`
const Rigth =  styled.div`
 padding: 10px 20px 
`
const Center =  styled.div`
 padding: 10px 20px 
`

const NavBar = () => {
  return (
    <Container>
        <Wrapper>
         <Left>leftt</Left>
         <Center>center</Center>
         <Rigth>Rigr</Rigth>
        
        </Wrapper>
      
    </Container>
  );
}

export default NavBar;
