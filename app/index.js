import React from 'react';
import RootStack from './router';

import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import Reducer from './redux/reducer';

const rootReducer = combineReducers({
  articlesState: Reducer
});
// import {
//   ADD_ARTICLE,
//   UPDATE_ARITCLE,
//   REMOVE_ARTICLE,
//   LIST_ARTICLES
// } from './actions'

// const initialState = {
//   articles: [
//     {
//       title: 'Title 1',
//       content: 'texttexttext'
//     },
//     {
//       title: 'Title 2',
//       content: 'texttexttext'
//     },
//     {
//       title: 'Title 3',
//       content: 'texttexttext'
//     },
//   ]
// }

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_ARTICLE:
//       {
//         // state.articles.push(action.data);
//         // action.callback();
//         state.articles.push(action.data);
//         return;
//       }
//     case UPDATE_ARITCLE:
//       {
//         const objIndex = state.articles.findIndex((obj => obj.key === action.key));
//         state.articles[objIndex].title = action.title;
//         state.articles[objIndex].content = action.content;
//         return {}
//       }
//     case REMOVE_ARTICLE:
//       return {}
//     case LIST_ARTICLES:
//       return {
//         articles: state.articles
//       }
//   }
//   return state
// }

const store = createStore(rootReducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    )
  }
}
