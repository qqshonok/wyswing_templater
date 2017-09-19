
window.onload = () => {
    // /try {
        const editor = new TmcEditor();
        let store = createStore(reducersStorage)
        let templateManager = new TemplateManager(store, editor)
        templateManager.run()
    /*} catch (e) {
        console.error(e)
    }*/
}



