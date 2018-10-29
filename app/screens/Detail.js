import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  TextInput
} from 'react-native';

import { removeArticle, updateArticles } from '../redux/actions';
import { connect } from 'react-redux';

class DetailScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      title: params ? params.otherParam : 'A Nested Details Screen',
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    };
  };

  state = {
    title: this.props.navigation.state.params ? this.props.navigation.state.params.title : '',
    content: this.props.navigation.state.params ? this.props.navigation.state.params.content : ''
  }

  updateData(data) {
    this.props.updateArticles(data);
    this.props.navigation.goBack();
  }

  removeData(key) {
    this.props.removeArticle(key);
    this.props.navigation.goBack();
  }

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={{
        flex: 1,
        paddingTop: 22
      }}>
        <Text>Title</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          placeholder="title"
          onChangeText={(value) => this.setState({ title: value })}
          value={this.state.title}
        />
        <Text>Content</Text>
        <TextInput
          style={{ height: 100, borderColor: 'gray', borderWidth: 1 }}
          multiline={true}
          numberOfLines={10}
          placeholder="content"
          onChangeText={(value) => this.setState({ content: value })}
          value={this.state.content}
        />
        <Button
          title="Update"
          onPress={() => this.updateData({
            key: params.key,
            title: this.state.title,
            content: this.state.content,
          })}
        />
        <Button
          title="Delete"
          onPress={() => this.removeData(params.key)}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    articles: state.articlesState.articles
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateArticles: data => dispatch(updateArticles(data)),
    removeArticle: data => dispatch(removeArticle(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen)
