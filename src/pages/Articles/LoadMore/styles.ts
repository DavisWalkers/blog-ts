import styled from "styled-components";
import { variables } from "../../../static/variables";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 60px;
  border-radius: 25px;

  background-color: ${variables.gray};
`;