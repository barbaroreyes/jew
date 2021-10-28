import styled from 'styled-components';
import NavBar from '../Compo/NavBar'
import Anouncement from '../Compo/Anouncement';
import Footer from '../Compo/Footer';
import NewLetter from '../Compo/NewLetter';


const Container = styled.div`

`
const Image = styled.img`
width:37%;
height:50vh;
border-radius: 10%;
`
const ImageContainer = styled.div`
flex:1;
`
const Wrapper = styled.div`
width:60%;
padding:50px;
display:flex;
justify-content: center;
`
const InfoContainer = styled.div`
flex:1;
display:flex;
justify-content: center;
flex-direction: column;
align-item:center;
border:2px solid black ;
padding:30px;
text-align: center;


`
const Title = styled.h1`

`
const Des = styled.p`

`

const Product = () => {
  return (
    <Container>
      <NavBar/>
      <Anouncement/>
      <Wrapper>
          <ImageContainer>
          <Image src='https://lamjce9b1a58db81496d90b0f125b07c8929185751-dev.s3.amazonaws.com/public/aretes-aros-perlas.jpeg'/>
          </ImageContainer>
          <InfoContainer>
              <Title>Title</Title>
              <Des> Lorem ipsum dolor sit amet consectetur, 
          adipisicing elit. Dolores eum accusamus quam ab, commodi eaque? Voluptatem in cupiditate cum nesciunt aspernatur,
           expedita eaque debitis delectus quidem minima quo ipsam obcaecati qui 
           consequatur quasi fuga eligendi accusamus doloribus hic, harum optio! Accusamus qui aliquid, ad dolorem possimus fuga culpa animi molestiae.</Des>
          </InfoContainer>
      </Wrapper>
      
      <NewLetter/>
      <Footer/>
    </Container>
  );
}

export default Product;
