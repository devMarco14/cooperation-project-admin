import React from 'react';
import styled from 'styled-components';
import HeaderButtons from './components/HeaderButtons';
import Category from '../Category';
import { Button, Tooltip, Avatar } from 'antd';
import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

const Header = () => {
  return (
    <StyledHeader>
      <span>
        {Category.map((value, i) => (
          <HeaderButtons key={i} value={value} />
        ))}
      </span>
      <StyledHeaderIcon>
        <StyledMargin>
          <Tooltip title="search">
            <Button shape="circle" icon={<SearchOutlined />} />
          </Tooltip>
        </StyledMargin>
        <StyledMargin>
          <StyledIcon className="fa-solid fa-bell"> </StyledIcon>
        </StyledMargin>
        <StyledMargin>
          <Avatar shape="circle" icon={<UserOutlined />} />
        </StyledMargin>
      </StyledHeaderIcon>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  box-shadow: 1px 0 3px 1px #dadce0;
`;

const StyledHeaderIcon = styled.div`
  display: flex;
  align-items: center;
`;

const StyledMargin = styled.div`
  margin: 0 10px 0 0;
`;

const StyledIcon = styled.i`
  font-size: 24px;
  color: gold;
`;
export default Header;
