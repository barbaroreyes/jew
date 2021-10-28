import React from 'react';
import styled from 'styled-components';
import {Send} from '@material-ui/icons'
const Container = styled.div`
height:60vh;
`
const Title = styled.div`
`
const Description = styled.div`
 `
const InputContainer = styled.div``
const Input = styled.input``
const Button = styled.button``



const NewLetter = () => {
  return (
    <Container>
      <Title>News</Title>
      <Description>Get info for you favorite products</Description>
      <InputContainer>
      <Input placeholder="Your email"/>
      <Button>
        <Send/>
      </Button>

      </InputContainer>
    </Container>
  );
}

export default NewLetter;
