/*
let variableStorage = createStore(variableReducer)
let mathStorage = createStore(mathReducer)
let listStorage = createStore(listReducer)
*/

window.onload = () => {
    const editor = new TmcEditor();
    let store = createStore(reducersStorage)
    let templateManager = new TemplateManager(store, editor)
    templateManager.run()
}



