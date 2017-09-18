const variableReducer = (state = [], action)  =>  {
    const variablePrefix = 'V'

    /**
     * index last added variable
     * @type {number}
     */
    switch (action.type) {
        case 'ADD' :
            let newState = state
            console.log('state',state)
            console.log("newState",newState)
            const checkEmpty = Object.keys(state).length === 0
            const lastAddedVariableIndex = checkEmpty ? 0 : newState.pop().id
            console.log(lastAddedVariableIndex)
            const addVariableIndex =  lastAddedVariableIndex + 1
            let newVariable = {
                id: addVariableIndex,
                name : `${variablePrefix}${addVariableIndex}`,
                value: ''
            }
            newState.push(newVariable)
            return [newState,newVariable]
        case 'DELETE' :
            console.log('delete')
            return state
    }
    return state;
}
let variableStorage = createStore(variableReducer)
let templateManager = new TemplateManager({}, new TmcEditor(variableStorage), variableStorage , mathForms = false)
templateManager.run()

