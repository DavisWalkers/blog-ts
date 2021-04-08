import styled from "styled-components";
import { variables } from "../../static/variables";

export const Container = styled.div`
  position: fixed;
  bottom: 50px;
  right: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;

  cursor: pointer;
  box-shadow: 0px 5px 10px ${variables.cardBoxShadow};
  background-color: ${variables.white};
`;

export const Icon = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;

  background-image: url("https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-512.png");
  background-repeat: no-repeat;
  background-size: contain;
`;