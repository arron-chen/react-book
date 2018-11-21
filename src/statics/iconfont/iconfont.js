import { createGlobalStyle } from 'styled-components';

const GlobalStyleFont = createGlobalStyle`
      @font-face {font-family: "iconfont";
        src: url('./iconfont.eot?t=1542816721469'); /* IE9*/
        src: url('./iconfont.eot?t=1542816721469#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
        url('./iconfont.ttf?t=1542816721469') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
        url('./iconfont.svg?t=1542816721469#iconfont') format('svg'); /* iOS 4.1- */
      }
      
      .iconfont {
        font-family:"iconfont" !important;
        font-size:16px;
        font-style:normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
`;
export default GlobalStyleFont;
