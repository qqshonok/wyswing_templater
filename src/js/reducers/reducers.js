const variableReducer =  (state = [], action) => {
    const prefix = 'VAR'

    switch (action.type) {
        case `ADD_${prefix}` :
            return getNewState(state,prefix)
        case 'DELETE' :
            console.log('delete')
            return state
        default:
            return state
    }
}

const mathReducer = (state = [], action) => {
    const prefix = 'MATH'

    switch (action.type) {
        case `ADD_${prefix}` :
            return getNewState(state,prefix)
        case 'DELETE' :
            console.log('delete')
            return state
        default:
            return state
    }
}

const listReducer = (state = [], action ) => {
    const prefix = 'LIST'
    switch (action.type) {
        case `ADD_${prefix}` :
            return getNewState(state,prefix)
        case 'DELETE' :
            console.log('delete')
            return state
        default:
            return state
    }
}