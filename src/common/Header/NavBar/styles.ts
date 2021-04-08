import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { variables } from "../../../static/variables";

export const activeClassName = 'link--active'

export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  font-family: 'New York Small', serif;
  font-size: 20px;
  line-height: 1.7;
  text-transform: uppercase;

  color: ${variables.black};

  &.${activeClassName} {
    padding: 26px 0;
    border-bottom: 2px solid ${variables.black};
  }
`;

export const Nav = styled.nav``;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;

  list-style: none;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-right: 30px;
  }
`;