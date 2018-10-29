import { ADD_ARTICLE } from './types'

export const addArticle = (data) => {
  return {
    type: ADD_ARTICLE,
    data,
  }
};
