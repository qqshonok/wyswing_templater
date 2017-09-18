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
            let newState = state
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
let variableStorage = createStore(variableReducer)
let templateManager = new TemplateManager({}, new TmcEditor(variableStorage), variableStorage , mathForms = false)
templateManager.run()




