import { activeClassName, Item, List, Nav, StyledLink } from './styles';

export const NavBar = () => {
  return (
    <Nav>
      <List>
        <Item>
          <StyledLink exact to='/' activeClassName={activeClassName}>
            Feed
          </StyledLink>
        </Item>
        <Item>
          <StyledLink to='/write' activeClassName={activeClassName}>
              Write
          </StyledLink>
        </Item>
        <Item>
          <StyledLink to='/my-posts' activeClassName={activeClassName}>
              My Posts
          </StyledLink>
        </Item>
      </List>
    </Nav>
  );
};