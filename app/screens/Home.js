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
import { NavigationEvents } from 'react-navigation';

class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    console.log('constructor home screen ==============>');
    this.state = {
      a: 0,
      render: true,
      articles: props.articles
    }
  }

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      title: 'Home',
      headerRight: (
        <Button
          // onPress={() => navigation.navigate('Details')}
          onPress={() => navigation.navigate('Modal')}
          title="New Article Test"
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
    console.log('props home screen=======', this.state);
    return (
      <View style={{ flex: 1 }}>
        <NavigationEvents
          onWillFocus={payload => {
            // this.setState(
            //   {
            //     render: !this.state.render
            //   }
            // );
            // alert('Nguyen Tuan Anh');
            console.log('Payload', payload);
            if (payload.action.type === 'Navigation/BACK') {
              console.log('111111111');
              console.log('1111111112222', this.props.articles);
              this.setState(
                {
                  a: Math.random(),
                  render: !this.state.render,
                  articles: this.props.articles
                }
              );
            }
          }}
        />

        {/* <FlatList  */}
        
        <FlatList
          data={this.state.articles}
          legacyImplementation={true}
          // extraData={this.state.articles}
          renderItem={({ item }) => {
            console.log('check render flatlist', this.state.articles);
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
    articles: state.articlesState.articles
  }
}

const mapDispatchToProps = dispatch => {
  return {
    listArticle: () => dispatch({ type: LIST_ARTICLES }),
  }
}

export default connect(mapStateToProps)(HomeScreen)
