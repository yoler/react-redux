let stateInit = {
    count: 0,
    name: 'yoler',
    age: 22,
    married: 'no'
}


function reducer(state = stateInit, action) {
    const count = state.count
    switch (action.type) {
        case 'increase':
            return { count: count + 1 }
        case 'increase2':
            return { count: count + 2 }
        case 'min':
            return { count: count - 1 }
        default:
            return state

    }
}

export default reducer
