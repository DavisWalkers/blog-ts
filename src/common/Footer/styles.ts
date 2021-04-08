import styled from "styled-components";
import { variables } from "../../static/variables";

export const FooterElement = styled.footer`
  margin-top: auto;
  height: 300px;

  font-family: "New York Regular", sans-serif;

  color: ${variables.white};
  background-color: ${variables.black};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const List = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  margin-top: 25px;

  list-style: none;
`;

export const Item = styled.li`
  text-decoration: underline;

  &:not(:last-child) {
    margin-right: 27px;
  }
`;

export const Logo = styled.div`
  margin-top: 40px;

  font-size: 46px;
`;

export const Link = styled.a``;

export const Copyrights = styled.p`
  margin-top: 40px;

  text-align: center;
`;