const variableReducer = (state = 0, action)  =>  {
    switch (action.type) {
        case 'ADD' :
            console.log('ADD ACTION')
            let test = 15 + 25
            return test
        case 'DELETE' :
            console.log('DELETE ACTION')
            return 100
        default:
            console.log('DEFAULT ACTION')
            return 0
    }
    return -1
}

let variableStor = createStore(variableReducer)
let templateManager = new TemplateManager({}, new TmcEditor, variableStor,mathForms = false)
templateManager.run()

