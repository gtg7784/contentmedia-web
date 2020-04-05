import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const globalStyles = createGlobalStyle`
    ${reset};
    body{
      margin: 0px;
      font-family: 'Noto Sans KR', sans-serif;
    }
`;

export default globalStyles;