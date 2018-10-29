import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  TextInput
} from 'react-native';
import { connect } from 'react-redux';
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
    const data = {
      title: this.state.title,
      content: this.state.content
    };
    this.props.addArticle(data);
    this.props.navigation.goBack();
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
          onPress={() => this.addData()}
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
    addArticle: data => dispatch(addArticle(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalScreen)
