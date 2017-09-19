/**
 * hepl create new state
 * @param state
 * @param prefix
 */
const getNewState = (state,prefix) => {
    let newState = [...state]
    const checkEmpty = Object.keys(state).length === 0
    const lastAddedVariableIndex = checkEmpty ? 0 : getLastItem(newState,'id')
    const addVariableIndex =  lastAddedVariableIndex + 1
    let newVariable = {
        id: addVariableIndex,
        name : `${prefix}${addVariableIndex}`,
        value: ''
    }
    newState.push(newVariable)
    return newState
}

/**
 * available take last added element in currentState
 * @param state
 * @param field
 * @returns {*}
 */
const getLastItem = (currentState, key = false) => {
    let lastItem =  [...currentState].pop()
    return key ?  lastItem[key] :  lastItem
}