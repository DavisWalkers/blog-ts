import { Link } from 'react-router-dom';
import { Button, Container, Description, Header, Section } from './styles';

export const NotFound = () => {
  return (
    <Section>
      <Container>
        <Header>Not Found</Header>
        <Description>Something went wrong</Description>
        <Link to='/'>
          <Button>Return to Home</Button>
        </Link>
      </Container>
    </Section>
  );
};