import styled from "styled-components";
import { variables } from "../../static/variables";

export const Card = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 25px;
  min-height: 270px;

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
  width: 300px;
  height: 150px;
  border-radius: 15px;
  overflow: hidden;

  background-color: ${variables.gray};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
  text-indent: -10000px;
`;

export const Header = styled.h2`
  display: -webkit-box;
  max-width: 250px;
  max-height: 100px;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  
  text-overflow: ellipsis;

  font-family: "SF Mono", sans-serif;
  font-size: 18px;
  text-align: center;
`;

export const MyPost = styled.div`
  font-size: 12px;
  opacity: .3;
`;