class TemplateManager {
    /**
     * @param props
     */
    constructor(props,editor) {
        this._props = props
        this.init()
        this._editor = editor;
    }

    /**
     * TODO 
     */
    init() {}

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