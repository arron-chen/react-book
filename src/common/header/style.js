import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
    position: relative;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100px;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
    background: url(${logoPic});
    background-size: contain;
    
`;

export const Nav = styled.div`
    width: 960px;
    height: 100%;
    padding-right: 70px;
    box-sizing: border-box;
    margin: 0 auto;
`;
export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active {
        color: #ea6f5a;
    }  
`;
export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height:38px;
    border:none;
    outline:none;
    border-radius:19px;
    background:#eee;
    margin-top: 9px;
    padding: 0 20px;
    box-sizing:border-box;
    font-size: 14px;
    margin-left: 20px;
    &::placeholder {
        color: #999;
    }
`;
export const Addtion = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`;
export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right:  20px;
  padding: 0 20px; 
  line-height: 38px;
  border-radius:19px;
  border: 1px solid #ec6149;
  font-size: 14px;
  &.reg {
    color: ec6149
  }
  &.writing {
    color:#fff;
    background: #ec6149;
  }
`;
export const SearchWrapper = styled.div`
   float: left;
   position: relative;
   .iconfont {
    position: absolute;
    right: 5px;
    width: 30px;
    height:30px;
    border-radius:50%;
   line-height:30px;
   text-align:center;
    bottom: 5px;
   }
`;
