import React, {Component} from 'react';
import {TitleWrapper,Title} from "./style";


export default class PageTitle extends Component{
	render() {
		return (
			<TitleWrapper >
				<Title> {this.props.title}</Title>
			</TitleWrapper>
		);
	}
}