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

export const removeArticle = () => ({
  type: REMOVE_ARTICLE,
})

export const updateArticle = (data) => ({
  type: UPDATE_ARITCLE,
  data
})
