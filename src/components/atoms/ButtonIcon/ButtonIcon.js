// ButtonIcon component

import styled from 'styled-components';

const ButtonIcon = styled.button`
  display: block;
  width: 67px;
  height: 67px;
  border-radius: 20px;
  background-color: 'transparent';
  background-image: url(${({ icon }) => icon});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 40%;
  border: none;
  &.active {
    background-color: white;
  }
`;

export default ButtonIcon;
