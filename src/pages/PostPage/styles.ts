import styled from "styled-components";
import { variables } from "../../static/variables";

export const Section = styled.section``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  padding: 0 160px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;

  background-color: ${variables.gray};
`;

export const Image = styled.img`
  width: inherit;
  height: inherit;

  object-fit: cover;
`;

export const Header = styled.h1`
  margin: 0;
  margin-top: 50px;

  font-size: 30px;
  line-height: 1.7;
  text-align: center;
`;

export const Description = styled.p`
  margin: 0;
  margin-top: 30px;

  text-align: center;
  font-size: 18px;
  font-family: "SF Mono", sans-serif;
  line-height: 2;
`;

export const Separator = styled.hr`
  margin: 60px 0;
  width: 100%;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  margin-bottom: 60px;
`;

export const WrapperSeparator = styled.div`
  height: 60px;
  margin: 0 10px;
`;