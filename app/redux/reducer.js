import {
  ADD_ARTICLE,
  LIST_ARTICLES,
  REMOVE_ARTICLE,
  UPDATE_ARITCLE
} from './types'


const initialState = {
  articles: [
    {
      title: 'Title 1',
      content: 'texttexttext'
    },
    {
      title: 'Title 2',
      content: 'texttexttext'
    },
    {
      title: 'Title 3',
      content: 'texttexttext'
    }
  ]
}

export default (state = initialState, actions) => {
  switch (actions.type) {
    // state.push(actions.data);
    case ADD_ARTICLE:
      {
        return {
          ...state, articles: [
            ...state.articles,
            actions.data
          ]
        }
      }
    // case UPDATE_ARITCLE:
    //   return { ...state, articles: actions.data }
    // case REMOVE_ARTICLE:
    //   return { ...state, articles: actions.data }
    // case LIST_ARTICLES:
    // return { articles: state.articles }
    default:
      return {
        ...state
      };
  }
}