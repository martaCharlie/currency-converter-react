import styled from "styled-components";

export const Container = styled.div`
  flex-basis: 550px;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 90px;
  background-color: ${({ theme }) => theme.color.white};
  background-size: cover;
  background-position: center;
  border-radius: 15px 15px 15px 15px;
  box-shadow: 0 0 30px ${({ theme }) => theme.color.black};
`;
