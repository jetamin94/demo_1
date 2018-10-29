import { ADD_ARTICLE } from './types'

export const addArticle = (data) => {
    
    console.log('data action add article', data)
    return {
    type: ADD_ARTICLE,
    data,
}};
