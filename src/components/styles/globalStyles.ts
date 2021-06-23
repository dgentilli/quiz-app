import styled from 'styled-components';

export const DefaultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(#e66465, #9198e5);
`;

export const HeaderWrapper = styled.h1`
  text-align: center;
  max-width: 90%;
  margin: 2rem auto;
  color: #333;
`;

export const Spacer = styled.div`
  width: 100%;
  height: 0.5rem;
`;

export const Button = styled.button`
  padding: 0.5rem;
  margin-top: 0.5rem;
  background-color: transparent;
  border-color: white;
  border-width: 1px;
  border-radius: 4px;
  color: #333;
`;
