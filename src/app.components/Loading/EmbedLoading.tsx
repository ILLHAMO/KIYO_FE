import React from 'react';
import styled from 'styled-components';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const EmbedLoading = ({ children }) => {
  return (
    <StyledWrapper className="cover-loading">
      <Spin
        className="cover-loading-spin"
        indicator={
          <LoadingOutlined
            style={{ fontSize: 50, color: 'var(--color-main)' }}
            spin
          />
        }
      >
        {children}
      </Spin>
    </StyledWrapper>
  );
};

export default EmbedLoading;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: absolute;
  left: 0;
  width: 100vw;

  .cover-loading-spin {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    max-height: calc(100vh - 64px) !important;
  }

  .ant-spin-nested-loading {
    width: 100vw;
  }
`;
