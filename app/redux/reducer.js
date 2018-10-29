import { ADD_ARTICLE } from './types'


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
        },
        {
            title: 'Title 4',
            content: 'texttexttext'
        },
    ]
}

export default (state = initialState, actions) => {
    switch (actions.type) {
        case ADD_ARTICLE:
            return { ...state, articles: actions.data }
        default:
            return {
                ...state
            };
    }
}