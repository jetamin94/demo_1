import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  TextInput
} from 'react-native';
import { UPDATE_ARITCLE, REMOVE_ARTICLE } from '../actions';
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

  render() {
    const { navigation } = this.props;
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
          onPress={() => this.props.updateArticle({
            title: this.state.title,
            content: this.state.content,
            // key: this.state.key,
          })}
        />
        <Button
          title="Delete"
          onPress={() => { }}
        />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateArticle: () => dispatch({ type: UPDATE_ARITCLE }),
    removeArticle: () => dispatch({ type: REMOVE_ARTICLE }),
  }
}

export default connect(mapDispatchToProps)(DetailScreen)
