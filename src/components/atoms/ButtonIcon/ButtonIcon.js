// ButtonIcon component

import styled, { css } from 'styled-components';

const ButtonIcon = styled.button`
  display: block;
  position: relative;
  width: 67px;
  height: 67px;
  border-radius: 20px;
  background-color: 'transparent';
  background-image: url(${({ icon, active }) => !active && icon});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 40%;
  border: none;
  &.active {
    background-color: white;
  }
  &::before,
  &::after {
    font-size: 1.6rem;
    font-family: Montserrat, sans-serif;
  }
  ${({ active }) =>
    active &&
    css`
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 67px;
        height: 67px;
        background-image: url(${({ icon }) => icon});
        background-position: center;
        background-repeat: no-repeat;
        z-index: 999999;
        transform: rotate(-45deg);
      }
      &::after {
        content: 'Close';
        display: block;
        transform: translateX(-60px);
      }
    `}
`;

export default ButtonIcon;
