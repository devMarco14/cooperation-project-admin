import React from 'react';
import styled from 'styled-components';

const RateOfChange = () => {
  return (
    <StyledROC>
      <StyledTextBox>
        <StyledBox>
          <StyledAdd>
            <div>사용가능:</div>
            <div>80%</div>
          </StyledAdd>
          <StyledDiminish>
            <div>사용불가:</div>
            <div>20%</div>
          </StyledDiminish>
        </StyledBox>
        <div>1주 전</div>
      </StyledTextBox>
      <StyledTextBox>
        <StyledBox>
          <StyledAdd>
            <div>사용가능:</div>
            <div>75%</div>
          </StyledAdd>
          <StyledDiminish>
            <div>사용불가:</div>
            <div>25%</div>
          </StyledDiminish>
        </StyledBox>
        <div>2주 전</div>
      </StyledTextBox>
      <StyledTextBox>
        <StyledBox>
          <StyledAdd>
            <div>사용가능:</div>
            <div>85%</div>
          </StyledAdd>
          <StyledDiminish>
            <div>사용불가:</div>
            <div>15%</div>
          </StyledDiminish>
        </StyledBox>
        <div>3주 전</div>
      </StyledTextBox>
      <StyledTextBox>
        <StyledBox>
          <StyledAdd>
            <div>사용가능:</div>
            <div>80%</div>
          </StyledAdd>
          <StyledDiminish>
            <div>사용불가:</div>
            <div>20%</div>
          </StyledDiminish>
        </StyledBox>
        <div>4주 전</div>
      </StyledTextBox>
    </StyledROC>
  );
};

const StyledROC = styled.div`
  display: flex;
  justify-content: center;
  width: 40%;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  :hover {
    box-shadow: 1px 1px 3px 3px #dadce0;
  }
`;

const StyledTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledBox = styled.div`
  width: 100%;
  border: 1px solid #969b9e;
  border-radius: 5px;
  color: #969b9e;
  font-size: 16px;
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
