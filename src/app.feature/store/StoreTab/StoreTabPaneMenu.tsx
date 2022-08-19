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

  const { menuResponses } = storeDetailInfo;

  return (
    <StyledWrapper className="store-tab-pane-menu" id="scroll-menu">
      <div className="store-tab-pane-menu__title">Menu</div>
      <Accordion alwaysOpen>
        {!!menuResponses &&
          menuResponses.map((menu) => (
            <Accordion.Item eventKey={menu.id}>
              <Accordion.Header>{menu.name}</Accordion.Header>
              <Accordion.Body>
                {menu?.menuOptionResponses &&
                  menu.menuOptionResponses.map((option) => (
                    <div className="store-tab-pane-menu__item" key={option.id}>
                      {option.name}
                    </div>
                  ))}
              </Accordion.Body>
            </Accordion.Item>
          ))}
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
