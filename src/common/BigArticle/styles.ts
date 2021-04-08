import styled from 'styled-components';
import { variables } from '../../static/variables';

export const Card = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 25px;

  box-shadow: 0px 5px 10px ${variables.cardBoxShadow};


  transition: box-shadow .2s ease;

  &:hover {
    box-shadow: 0px 30px 60px ${variables.cardBoxShadow};
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 200px;
  border-radius: 15px;
  overflow: hidden;

  background-color: ${variables.gray};
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;

  text-indent: -10000px;
  object-fit: cover;
`;

export const Header = styled.h2`
  display: -webkit-box;
  margin: 0;
  margin-top: 40px;
  max-width: 460px;
  max-height: 200px;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  text-align: center;
`;

export const Description = styled.p`
  display: -webkit-box;
  margin: 0;
  margin-top: 20px;
  margin-bottom: 30px;
  max-width: 400px;
  overflow: hidden;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;

  text-align: center;

  font-family: "SF Mono", sans-serif;
`;

export const Separator = styled.hr`
  width: 450px;
  height: 2px;
  
  background-color: ${variables.black};
`;