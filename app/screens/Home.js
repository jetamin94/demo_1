import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  FlatList,
  StyleSheet
} from 'react-native';

import { connect } from 'react-redux';
import { LIST_ARTICLES } from '../actions';

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      title: 'Home',
      headerRight: (
        <Button
          // onPress={() => navigation.navigate('Details')}
          onPress={() => navigation.navigate('Modal')}
          title="New Article"
          color="#fff"
        />
      )
    };
  };

  // componentWillMount() {
  //   this.listArticle();
  // }

  // fetchData = () => {
  //   this.state.articles = this.articles
  // }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.props.articles}
          renderItem={({ item }) => {
            return (
              <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'stretch',
              }}>
                <Text
                  style={styles.item}
                  onPress={() => {
                    const title = item.title;
                    this.props.navigation.navigate('Details', {
                      title,
                      otherParam: title,
                      content: item.content
                    });
                  }}
                >{item.title}</Text>
                <Text style={styles.item}>{'time'}</Text>
              </View>
            )
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

const mapStateToProps = state => {
  return {
    articles: state.articles
  }
}

const mapDispatchToProps = dispatch => {
  return {
    listArticle: () => dispatch({ type: LIST_ARTICLES }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
