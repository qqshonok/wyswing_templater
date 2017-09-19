/**
 *
 * @param state
 * @param action
 * @returns {Array}
 */
const variableReducer =  (state = [], action) => {
    const variablePrefix = 'V'

    switch (action.type) {
        case 'ADD' :
            let newState = [...state]
            const checkEmpty = Object.keys(state).length === 0
            const lastAddedVariableIndex = checkEmpty ? 0 : [...newState].pop().id
            const addVariableIndex =  lastAddedVariableIndex + 1
            let newVariable = {
                id: addVariableIndex,
                name : `${variablePrefix}${addVariableIndex}`,
                value: ''
            }
            newState.push(newVariable)
            return newState
        case 'DELETE' :
            console.log('delete')
            return state
        default:
            return state
    }
}

/**
 *
 * @param state
 * @param action
 * @returns {Array}
 */
const mathReducer = (state = [], action) => {
    const variablePrefix = 'MATH'

    switch (action.type) {
        case 'ADD' :
            let newState = [...state]
            const checkEmpty = Object.keys(newState).length === 0
            const lastAddedVariableIndex = checkEmpty ? 0 : [...newState].pop().id
            const addVariableIndex =  lastAddedVariableIndex + 1
            let newVariable = {
                id: addVariableIndex,
                name : `${variablePrefix}${addVariableIndex}`,
                value: ''
            }
            newState.push(newVariable)
            return newState
        case 'DELETE' :
            console.log('delete')
            return state
        default:
            return state
    }
}


const listReducer = (state = [], action ) => {
    const variablePrefix = 'LIST'

    switch (action.type) {
        case 'ADD' :
            let newState = [...state]
            const checkEmpty = Object.keys(newState).length === 0
            const lastAddedVariableIndex = checkEmpty ? 0 : [...newState].pop().id
            const addVariableIndex =  lastAddedVariableIndex + 1
            let newVariable = {
                id: addVariableIndex,
                name : `${variablePrefix}${addVariableIndex}`,
                value: ''
            }
            newState.push(newVariable)
            return newState
        case 'DELETE' :
            console.log('delete')
            return state
        default:
            return state
    }
}

/**
 * instance reducers
 */
let variableStorage = createStore(variableReducer)
let mathStorage = createStore(mathReducer)
let listStorage = createStore(listReducer)


let templateManager = new TemplateManager({}, new TmcEditor(variableStorage,mathStorage,listStorage), variableStorage , mathForms = false)
templateManager.run()




