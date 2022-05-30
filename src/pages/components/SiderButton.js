import React from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';

const SiderButtons = ({ value }) => {
  return <SiderButton>{value.title}</SiderButton>;
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
