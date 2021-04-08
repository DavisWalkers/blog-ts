import styled from "styled-components";
import { variables } from "../../static/variables";

export const ButtonElement = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 60px;
  border: 2px solid ${variables.gray};
  border-radius: 100px;

  font-size: 18px;
  font-family: "SF Mono", sans-serif;
  text-align: center;

  background-color: ${variables.white};

  transition: background-color .2s ease, color .2s ease;

  &:hover {
    background-color: ${variables.black};
    color: ${variables.white};
  }

  &:focus {
    outline: 0;
  }
`;