import React, { Component, PropTypes } from 'react'; // 引入了React和PropTypes
import { connect } from 'react-redux';
import { is, fromJS } from 'immutable';
import { renderData } from '../common/mixin';

/* 以类的方式创建一个组件 */
class Main extends Component {
    constructor(props) {
    	super(props);
    }
    shouldComponentUpdate(nextProps, nextState) {
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
    }
	render() {
		return (	
		<div>
			用户管理
		</div>
		);
	}
}

Main.contextTypes = {
};

export default renderData({
    id: 'user',  //应用关联使用的redux
    component: Main, //接收数据的组件入口
    url: '' //服务器请求的地址
});