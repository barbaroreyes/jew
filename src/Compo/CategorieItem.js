
import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
display:flex;

flex:1;
margin: 4px;
heigth:100vh;
position:relative;
border:1px solid black;

`
const Image = styled.img`
width:100%;
heigth:100%;
object-fit:cover;
`
const Info = styled.div`
position:absolute;
width:100%;
heigth:100%;
top:0;
left:0;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
color:white;
`
const Title = styled.h1`
color:rgb(189,132,64);
`
const Button = styled.button`
padding:20px;
`


const CategorieItem = ({item}) => {

  return (
    <Container>
        <Image src={item.image} 
        />
        <Info>
        <Title>{item.name}</Title>
        <Button>Shop Now</Button>
        </Info>
    </Container>
  );
}

export default CategorieItem;
