import React from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { useNavigate } from 'react-router';

const SiderButtons = ({ value }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (value.category_id === 4) {
      navigate('/main');
    } else if (value.category_id === 1) {
      navigate('/seoul');
    } else if (value.category_id === 2) {
      navigate('/gyeonggi');
    } else {
      navigate('/incheon');
    }
  };
  return <SiderButton onClick={handleClick}>{value.title}</SiderButton>;
};

const SiderButton = styled(Button)`
  width: 60%;
  height: auto;
  margin: 10px auto;
  font-size: 20px;
  color: #969b9e;

  :hover,
  :focus {
    color: #3d8ba8;
    border-color: #3d8ba8;
    background: #fff;
  }
`;
export default SiderButtons;
