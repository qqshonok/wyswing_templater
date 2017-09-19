class TemplateManager {

    /**
     * intit application params
     * @param store
     * @param editor
     */
    constructor(store,editor) {
        console.log('APPLICATION START')
        this._editor = editor
        this._store = store
        this._editor.setStorage(this._store)
        this.init()
    }

    /**
     * TODO
     */
    init() {
       console.log(this._store.getState())
    }

    /**
     * run templateGenerate application
     */
    run() {
        this._bindEvents()
        this._initEditor()
    }

    /**
     * initialize buttons
     * @private
     */
    _initModalButtons() {
        this.showModalBtn = document.querySelector('#template_builder_btn')
    }

    /**
     *
     * @private
     */
    _bindEvents() {
        console.log('bind events')
    }

    /**
     * init WYSIWYG EDITOR
     * @private
     */
    _initEditor() {
        this._editor.init()
    }
}