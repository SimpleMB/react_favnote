import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const StyledH1 = styled.h1`
  font-family: Montserrat, sans-serif;
  font-size: 3rem;
`;

const Loader = () => {
  console.log('hello');
  return (
    <StyledWrapper>
      <StyledH1>Loading...</StyledH1>
    </StyledWrapper>
  );
};

export default Loader;
