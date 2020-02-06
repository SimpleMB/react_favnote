import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.notes};
  width: ${({ width }) => width || '220px'};
  height: 47px;
  border: none;
  border-radius: 50px;
  font-family: Montserrat, sans-serif;
  font-size: 1.6rem;
  font-weight: 600;
  text-transform: uppercase;

  ${({ pageType }) =>
    pageType &&
    css`
      background-color: ${({ theme }) => theme[pageType]};
    `}

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ${({ theme }) => theme.grey200};
      width: 105px;
      height: 30px;
      font-size: 10px;
    `}
`;

export default Button;
