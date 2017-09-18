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

let newStorage = createStore(variableReducer)

newStorage.subscribe(() => console.log(newStorage.getState()))

newStorage.dispatch({type: "ADD"})
newStorage.dispatch({type: "DELETE"})
newStorage.dispatch({type: "FALSE"})




let templateManager = new TemplateManager({}, new TmcEditor)
templateManager.run()

