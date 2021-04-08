import { NavLink } from 'react-router-dom';
import { Container, Copyrights, FooterElement, Item, Link, List, Logo } from './styles';

export const Footer = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <FooterElement>
      <Container>
        <NavLink onClick={handleClick} to='/'>
          <Logo>
            Blog
          </Logo>
        </NavLink>
        <List>
          <Item>
            <Link 
              href='https://twitter.com' 
              rel='noreferrer' 
              target='_blank' 
            >
              Twitter
            </Link>
          </Item>
          <Item className='footer__item'>
            <Link
              href='https://web.telegram.org' 
              target='_blank' 
              rel='noreferrer'
            >
              Telegram
            </Link>
          </Item>
        </List>
        <Copyrights className='footer__copyrights'>
          © 2021 Blog Co. 
          <br />
          All rights reserved. 
        </Copyrights>
      </Container>
    </FooterElement>
  );
};