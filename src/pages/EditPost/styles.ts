import TextareaAutosize from 'react-textarea-autosize';
import styled from "styled-components";
import { ButtonElement } from '../../common/Button/styles';
import { variables } from '../../static/variables';

export const Section = styled.section``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 160px;
`;

export const Header = styled.h1`
  margin: 0;
  margin-bottom: 60px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const StyledInput = styled(TextareaAutosize)`
  width: 100%;
  height: auto;
  padding: 10px 20px;
  border-radius: 10px;

  font-family: "SF Mono", sans-serif;
  font-size: 22px;
  line-height: 2;

  overflow: hidden;
  outline: none;
  resize: none;

  &:first-of-type {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;

    font-size: 28px;
    font-weight: 700;
  }

  &:last-of-type {
    border-top: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  &::placeholder {
    font-weight: 400;
  }
`;

export const Button = styled(ButtonElement)`
  margin-top: 60px;
`;


const Error = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 99%;
  height: 40px;
  border: 1px solid ${variables.gray};
  
  font-family: "SF Mono", sans-serif;
  
  background-color: ${variables.white};
`;

export const ErrorTitle = styled(Error)`
  margin-top: -40px;
  border-bottom: 0;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
`;

export const ErrorBody = styled(Error)`
  margin-bottom: -40px;
  border-top: 0;
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
`;