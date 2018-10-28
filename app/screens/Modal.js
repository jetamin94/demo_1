import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  TextInput
} from 'react-native';
import { connect } from 'react-redux';
import { ADD_ARTICLE } from '../actions';

class ModalScreen extends React.Component {
  static navigationOptions = {
    title: 'New Article',
  };

  state = {
    title: '',
    content: ''
  }

  render() {
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
          onPress={() => this.props.addArticle({
            title: this.state.title,
            content: this.state.content
          })}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    articles: state.articles
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addArticle: data => dispatch({ type: ADD_ARTICLE, data }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalScreen)
