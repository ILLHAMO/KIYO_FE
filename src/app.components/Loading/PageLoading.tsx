import React from 'react';
import styled from 'styled-components';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const PageLoading = () => {
  return (
    <StyledWrapper>
      <Spin
        indicator={
          <LoadingOutlined
            style={{ fontSize: 50, color: 'var(--color-main)' }}
            spin
          />
        }
      />
    </StyledWrapper>
  );
};

export default PageLoading;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;
