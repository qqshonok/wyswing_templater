class TemplateManager {

    /**
     *
     * @param props
     * @param editor editor  editor plugin ( begin from tiny MCE :)) )
     * @param systemVar system variable need for formula creating
     */
    constructor(props,editor,systemVarsReducer) {
        this._props = props
        this._systemVars = systemVarsReducer
        this.init()
        this._editor = editor;
    }

    /**
     * TODO
     */
    init() {
        this._systemVars.subscribe(() => console.log(this._systemVars.getState()))
        this._systemVars.dispatch({type: "ADD"})
        this._systemVars.dispatch({type: "DELETE"})
        this._systemVars.dispatch({type: "FALSE"})
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
       // console.log('bind events')
    }

    /**
     * init WYSIWYG EDITOR
     * @private
     */
    _initEditor() {
        this._editor.init()
    }
}