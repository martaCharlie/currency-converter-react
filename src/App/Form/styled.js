import styled, { css } from "styled-components";

export const LabelText = styled.label`
  font-weight: bold;
  font-size: large;
  width: 150px;
  display: inline-block;
  margin-right: 5px;
`;

export const Header = styled.h1`
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.black};
  background-color: ${({ theme }) => theme.color.gray};
`;

export const Field = styled.select`
  border: 2px solid;
  width: 250px;
  padding: 10px;
`;

export const Button = styled.button`
  width: 60%;
  background-color: ${({ theme }) => theme.color.outerSpace};
  color: ${({ theme }) => theme.color.white};
  font-size: large;
  padding: 20px;
  margin-top: 40px;
  align-items: center;
`;
