import { createGlobalStyle } from 'styled-components';
import resetCSS from './resetCSS';

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-main: #85C07B;
    
    --color-black: #000000;
    --color-gray-300: #999999;
    --color-gray-200: #d0d0d0;
    --color-gray-100: #e1e1e1;
    --color-white: #ffffff;
    
    --color-yellow : #ffb800;
    --color-blue: #268AFF;
    --color-red: #FF0000;
    
    --color-error: #FF7378;
    --color-success: #4ACC92;
  }
  
  ${resetCSS};

  &::-webkit-scrollbar {
    display: none;
  }
  
  // 백그라운스 스크롤 방지 스타일
  body.__modal_background_scroll_stop {
    overflow: hidden !important;
  }
  
  .win-max-width {
    max-width: 664px;
  }

  body {
    margin: 0 auto !important;
  }
`;

export const GlobalStyleHeight100 = createGlobalStyle`
  html, body, #__next {
    height: 100%;
  }
`;

export const GlobalStyleBackGroundColor = createGlobalStyle`
  html, body, #__next {
    background: #f9f9f9;
  }
`;
