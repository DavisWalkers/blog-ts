import styled from "styled-components";
import { ButtonElement } from "../../common/Button/styles";

export const Section = styled.section``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 160px;
`;

export const Header = styled.h1`
  font-size: 42px;
`;

export const Description = styled.p`
  font-family: "SF Mono", sans-serif;
  font-size: 24px;
`;

export const Button = styled(ButtonElement)`
  margin-top: 50px;
`;