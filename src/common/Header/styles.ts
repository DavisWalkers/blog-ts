import styled from "styled-components";
import { variables } from "../../static/variables";

export const HeaderElement = styled.header`
  box-shadow: 0px 1px 0px ${variables.headerBoxShadow};
`;

export const Containter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
`;