import {
  ADD_ARTICLE,
  LIST_ARTICLES,
  REMOVE_ARTICLE,
  UPDATE_ARITCLE
} from './types'

const initialState = {
  articles: [
    {
      key: 1,
      title: 'Title 1',
      content: 'texttexttext'
    },
    {
      key: 2,
      title: 'Title 2',
      content: 'texttexttext'
    },
    {
      key: 3,
      title: 'Title 3',
      content: 'texttexttext'
    }
  ]
}

export default (state = initialState, actions) => {
  switch (actions.type) {
    case ADD_ARTICLE:
      {
        state.articles.push(actions.data)
        return {
          ...state
        }
      }
    case UPDATE_ARITCLE:
      {
        const objIndex = state.articles.findIndex((obj => obj.key === actions.data.key));
        state.articles[objIndex].title = actions.data.title;
        state.articles[objIndex].content = actions.data.content;
        return { ...state }
      }
    case REMOVE_ARTICLE:
      {
        state.articles = state.articles.filter(e => e.key !== actions.data)
        return { ...state }
      }
    case LIST_ARTICLES:
      return { articles: state.articles }
    default:
      return {
        ...state
      };
  }
}