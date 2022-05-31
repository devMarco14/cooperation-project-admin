import React from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';

const HeaderButtons = ({ value }) => {
  return <HeaderButton>{value.title}</HeaderButton>;
};

const HeaderButton = styled(Button)`
  height: auto;
  margin: 6px 0 6px 6px;
  font-size: 16px;
  color: #969b9e;

  :hover,
  :focus {
    color: #3d8ba8;
    border-color: #3d8ba8;
    background: #fff;
  }
`;

export default HeaderButtons;
