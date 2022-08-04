import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Accordion } from 'react-bootstrap';

type TProps = {
  setMenuScroll: (scroll: number) => void;
  storeDetailInfo: any;
};

const StoreTabPaneMenu: React.FC<TProps> = ({
  setMenuScroll,
  storeDetailInfo,
}) => {
  if (typeof window !== 'undefined')
    window.addEventListener('scroll', () => {
      let scrollLocation = document.getElementById('scroll-menu')?.offsetTop; // 현재 스크롤바 위
      setMenuScroll(scrollLocation);
    });

  return (
    <StyledWrapper className="store-tab-pane-menu" id="scroll-menu">
      <div className="store-tab-pane-menu__title">Menu</div>
      <Accordion alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>식사류</Accordion.Header>
          <Accordion.Body>
            <div className="store-tab-pane-menu__item">국밥1</div>
            <div className="store-tab-pane-menu__item">국밥2</div>
            <div className="store-tab-pane-menu__item">국밥3</div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>음료</Accordion.Header>
          <Accordion.Body>
            <div className="store-tab-pane-menu__item">콜라</div>
            <div className="store-tab-pane-menu__item">사이다</div>
            <div className="store-tab-pane-menu__item">소주</div>
            <div className="store-tab-pane-menu__item">맥주</div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>키즈메뉴</Accordion.Header>
          <Accordion.Body>
            <div className="store-tab-pane-menu__item">어린이 돈까스</div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <div id="store-tab-review" />
    </StyledWrapper>
  );
};

export default StoreTabPaneMenu;

const StyledWrapper = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  padding: 20px;
  border-bottom: 0.5px solid var(--color-gray-100);

  .store-tab-pane-menu__title {
    letter-spacing: 0.29em;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 8px;
  }

  .accordion {
    .accordion-item {
      border: none;

      .accordion-header {
        .accordion-button {
          padding: 8px 0;
          border: none;
          color: var(--color-black);
          box-shadow: none !important;
          border-bottom: 0.5px solid var(--color-gray-100);
        }

        .accordion-button:hover {
          z-index: 0;
        }

        .accordion-button:not(.collapsed) {
          background-color: #ffffff;
          box-shadow: none;
        }
      }

      .accordion-collapse {
        border-bottom: 0.5px solid var(--color-gray-100);

        .accordion-body {
          padding: 8px;

          .store-tab-pane-menu__item {
            font-size: 12px;
          }
        }
      }
    }
  }
`;
