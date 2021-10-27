import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
height: 30px;
background-color:teal;
display:flex;
justify-content: center;
color:#fff;
align-items:center;
font-size: 14px;
font-weith :500;
`
const Anouncement = () => {
  return (
    <Container>
      Big Deals only for you 
    </Container>
  );
}

export default Anouncement;
