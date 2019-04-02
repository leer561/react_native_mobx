import styled from 'styled-components/native'
import {colors, size} from "../../../style/variables";

const NewsWrapper = styled.View`
	flex: 1;
	background-color: ${colors.grey5};
	padding-top: 15px;
`
const LoadingWrapper = styled.View`
  	padding: 20px;
  	display: ${props => props.isLoading ? "flex" : "none"};
`

const CardWrapper = styled.View`
  	padding: 10px 15px;
  	border-bottom-width:1px;
  	border-bottom-color: ${colors.grey4};
  	border-top-width: 1px;
  	border-top-color:  ${colors.grey4};
  	background-color:  ${colors.white};
  	margin-bottom: 5px;
`

const CardTitle = styled.Text`
  	padding: 5px 0;
  	font-size: ${size.h3FontSize};
  	font-weight: bold;
  	color: ${colors.black};
`
const CardInfo = styled.View`
  	flex-direction: row;
  	justify-content: space-between;
  	padding-bottom: 10px;
`
const UserName = styled.Text`
  	color: ${colors.grey3};
  	font-size: ${size.fontSizeSm};
  	text-align: left;
`
const PublishDate = styled.Text`
  	color: ${colors.grey3};
  	font-size: ${size.fontSizeSm};
  	text-align: right;
`
const CardContent = styled.Text`
	font-size: ${size.fontSizeBase};
	max-height: 50px;
	overflow: hidden;
`


export {NewsWrapper, LoadingWrapper,CardWrapper,
	CardTitle,CardInfo,CardContent,UserName,PublishDate}