import React from 'react';
import styled from 'styled-components';
import {Send} from '@material-ui/icons'
const Container = styled.div`
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
      <Title></Title>
      <Description></Description>
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
