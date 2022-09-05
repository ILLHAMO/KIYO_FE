import { Button } from 'antd';
import React from 'react';
import styled from 'styled-components';

type TProps = {
  type?: string;
  onClick?: (e) => void;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
};

const ButtonFullWidth: React.FC<TProps> = ({
  type = 'button',
  className = 'button-full-width-button',
  loading = false,
  disabled = false,
  onClick,
  children,
}) => {
  return (
    <StyledButton
      block
      htmlType={type}
      disabled={disabled}
      loading={loading}
      className={className}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default ButtonFullWidth;

const StyledButton = styled(Button)`
  cursor: pointer;
  position: fixed !important;
  bottom: 0 !important;
  left: 0 !important;
  height: 48px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  background-color: var(--color-main) !important;
  color: var(--color-white) !important;
  font-weight: 500 !important;
  font-size: 18px !important;
  transition: 200ms !important;
  border: none;

  &:hover {
    border: none;
    opacity: 0.5 !important;
  }
`;
