const variableReducer = (state = {lastAddVariableIndex : 0}, action)  =>  {
    const variablePrefix = 'V'

    /**
     * index last added variable
     * @type {number}
     */
    switch (action.type) {
        case 'ADD' :
            let newState = Object.assign(state)
            const addVariableIndex =  newState.lastAddVariableIndex + 1
            let newVariable = {
                id: addVariableIndex,
                name : `${variablePrefix}${addVariableIndex}`,
                value: ''
            }
            newState.lastAddVariableIndex = addVariableIndex
            newState[addVariableIndex] = newVariable
            return newState
        case 'DELETE' :
            return state
        default:
           return state
    }
}
let variableStorage = createStore(variableReducer)
let templateManager = new TemplateManager({}, new TmcEditor(variableStorage), variableStorage , mathForms = false)
templateManager.run()

