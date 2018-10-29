import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  TextInput
} from 'react-native';
import { connect } from 'react-redux';
import { ADD_ARTICLE } from '../actions';
import { addArticle } from '../redux/actions'

class ModalScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: ''
    }
  }

  static navigationOptions = {
    title: 'New Article',
  };

  addData = () => {
    data = {
      title: this.state.title,
      content: this.state.content
    };
    let dataArticles = this.props.articles;
    dataArticles.push(data);
    this.props.addArticle(dataArticles);
    this.props.navigation.goBack();
    console.log('log state redux', this.props.articles);
  }

  render() {
    console.log('props modal', this.props);
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
          title="Create"
          onPress={() => this.addData()}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log('Map state to props ', state);
  return {
    articles: state.articlesState.articles
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addArticle: data => dispatch(addArticle(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalScreen)
