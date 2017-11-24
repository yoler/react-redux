let stateInit = {
    count: 0,
    name: 'yoler',
    age: 22,
    married: 'no',
    api: '114.125.12.74/repo/api'
}


function reducer(state = stateInit, action) {
    const count = state.count
    switch (action.type) {
        case 'increase':
            return {
                ...state,
                count: count + 1
            }
        case 'increase2':
            return { count: count + 2 }
        case 'increase3':
            return { count: count + 3 }
        case 'min':
            return { count: count - 1 }
        default:
            return state

    }
}

export default reducer
