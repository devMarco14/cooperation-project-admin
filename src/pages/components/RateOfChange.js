import React from 'react';
import styled from 'styled-components';

const RateOfChange = () => {
  return (
    <StyledROC>
      <StyledBox>
        <StyledAdd>
          <div>EV기기 증가:</div>
          <div>10</div>
        </StyledAdd>
        <StyledDiminish>
          <div>EV기기 감소:</div>
          <div>10</div>
        </StyledDiminish>
      </StyledBox>
    </StyledROC>
  );
};

const StyledROC = styled.div`
  display: flex;
  justify-content: center;
  width: 30%;
  align-items: center;
  :hover {
    box-shadow: 1px 1px 3px 3px #dadce0;
  }
`;

const StyledBox = styled.div`
  width: 40%;
  height: auto;
  border: 1px solid #969b9e;
  border-radius: 5px;
  color: #969b9e;
  font-size: 18px;
`;

const StyledAdd = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledDiminish = styled.div`
  display: flex;
  justify-content: center;
`;
export default RateOfChange;
