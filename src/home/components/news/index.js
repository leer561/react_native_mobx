import React, {Component} from 'react';
import {Text, View, ActivityIndicator, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Feather';

import PageTitle from '../../../common/components/page-title'
import {NewsWrapper,LoadingWrapper,CardWrapper,CardTitle,CardInfo,
	CardContent,UserName,PublishDate} from "./style";

export default class News extends Component {
	constructor(props) {
		super(props);
		this.state = {isLoading: true,dataSource:[]}
	}

	componentDidMount() {
		fetch('https://www.v2ex.com/api/topics/hot.json')
			.then((response) => response.json())
			.then((responseJson) => {
				console.log('responseJson', responseJson)
				this.setState({
					isLoading: false,
					dataSource: responseJson
				});

			})
			.catch((error) => {
				console.error(error);
			});
	}

	render() {
		return (
			<NewsWrapper>
				<LoadingWrapper isLoading={this.state.isLoading}>
					<ActivityIndicator/>
				</LoadingWrapper>
				<View style={{flex:1}}>
					<FlatList
						data={this.state.dataSource}
						extraData={this.state}
						renderItem={({item}) =>
							<CardWrapper>
								<CardTitle>{item.title}</CardTitle>
								<CardInfo>
									<View>
										<UserName >{item.member.username}</UserName>
									</View>
									<View>
										<PublishDate>{item.last_touched}</PublishDate>
									</View>
								</CardInfo>
								<CardContent>
									{item.content}
								</CardContent>
							</CardWrapper>
						}
						keyExtractor={(item, index) => index.toString()}
						removeClippedSubviews={false}
						getItemLayout={(data, index) => {

							return { length: 40, offset: 40 * index, index }
						}}
					/>
				</View>

			</NewsWrapper>
		)
	}

}