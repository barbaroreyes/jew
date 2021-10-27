import React from 'react';
import styled from 'styled-components';
import {ArrowLeftOutlined,ArrowRightOutlined} from '@material-ui/icons'
const Container = styled.div`
width: 100%; 
height:100vh;
display:flex;
background-color: salmon;
position:relative;


`;
const Arrow = styled.div`

width: 50px; 
height:50px;
background-color:#fff;
border-radius: 50%;
display:flex;
justify-content: center;
align-items: center;
position:absolute;
top:0; 
bottom:0;
left:${props => props.direction==="left" && "10px"};
right:${props => props.direction==="right" && '10px'};
margin:auto;
cursor:pointer;
opacity:0.5

`
const Wrapper = styled.div`
hight:100%;
`
const Slide = styled.div`
width: 100vw;
higthL100vh;
display:flex;
align-items: center;

align-items: center;

`
const ImageContainer = styled.div`
flex:1;
height:100%;
`
const Image = styled.img`
height:80%;
`
const InfoConten = styled.div`
flex:1;

`

const Slider = () => {
  return (
    <Container>
        <Arrow direction="left">
            <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper>
                <Slide>
                <ImageContainer>
                <Image src='https://lamjce9b1a58db81496d90b0f125b07c8929185751-dev.s3.amazonaws.com/public/gargantilla-con-sol.jpeg'/>
              </ImageContainer>
              <InfoConten></InfoConten> 
              </Slide>
            
            </Wrapper>
        <Arrow direction="right">
            <ArrowRightOutlined/>
            </Arrow>
      
    </Container>
  );
}

export default Slider;
