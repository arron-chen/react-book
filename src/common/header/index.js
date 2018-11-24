import React, {Component} from 'react';
import { connect } from 'react-redux'; // react-redux第二个函数conect,返回一个容器组件
import {
    HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addtion, Button, SearchWrapper
} from "./style";

class Header extends Component {
    render() {
        const { data } = this.props;
        return (
            <HeaderWrapper>
                <Logo href="/"></Logo>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载APP</NavItem>
                    <NavItem className="right">登陆</NavItem>
                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <NavSearch></NavSearch>
                        <i className="iconfont">&#xe614;</i>
                    </SearchWrapper>
                </Nav>
                <Addtion>
                    <Button className="writing">
                        <i className="iconfont">&#xe615;</i>
                        写文章</Button>
                    <Button className="reg">注册</Button>
                </Addtion>
                <div>{data}</div>
            </HeaderWrapper>
        )

    }
}

const mapState = (state) => {
    return {
        data: state.data
    }
}
const mapDispatch = (dispatch) => {
    return {

    }
}
export default connect(mapState, mapDispatch)(Header);