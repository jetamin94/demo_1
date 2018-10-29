import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  FlatList,
  StyleSheet
} from 'react-native';

import { connect } from 'react-redux';
import { listArticles } from '../redux/actions'
import { NavigationEvents } from 'react-navigation';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      render: true,
    }
  }

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      title: 'Home',
      headerRight: (
        <Button
          onPress={() => navigation.navigate('Modal')}
          title="New Article"
          color="#fff"
        />
      )
    };
  };

  fetchData = () => {
    this.props.listArticles();
  }

  render() {
    this.fetchData();
    return (
      <View style={{ flex: 1 }}>
        <NavigationEvents
          onWillFocus={payload => {
            if (payload.action.type === 'Navigation/BACK') {
              this.setState({ render: !this.state.render, });
            }
          }}
        />

        <FlatList
          data={this.props.articles}
          legacyImplementation={true}
          // extraData={this.props.articles}
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
                    this.props.navigation.navigate('Detail', item);
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
    listArticles: () => dispatch(listArticles()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
// export default connect(mapStateToProps)(HomeScreen)
