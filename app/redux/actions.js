import {
  ADD_ARTICLE,
  LIST_ARTICLES,
  REMOVE_ARTICLE,
  UPDATE_ARITCLE
} from './types'

export const addArticle = (data) => ({
  type: ADD_ARTICLE,
  data,
})

export const listArticles = () => ({
  type: LIST_ARTICLES
})

export const removeArticle = (data) => {
  return {
    type: REMOVE_ARTICLE,
    data
  }
}

export const updateArticles = (data) => ({
  type: UPDATE_ARITCLE,
  data
})
