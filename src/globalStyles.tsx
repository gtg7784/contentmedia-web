import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};
    a{
      text-decoration: none;
      color: inherit;
    }
    *{
      box-sizing:border-box;
    }
    body{
      font-family: 'Noto Sans KR', sans-serif;
      font-size: 1rem;
		  color: #ffffff;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
`;

export default GlobalStyle;