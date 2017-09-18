class TemplateManager {
 /**
     * @param props
     */
    constructor(props,editor) {
        this._props = props
        this.init()
        this._editor = editor;
    }

    init() {
      
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

const   toolBarOption = "undo redo | variables |" +
                        "fontselect fontsizeselect lineheightselect | bold italic | alignleft " +
                        "aligncenter alignright alignjustify | bullist " +
                        "numlist outdent indent | pagebreak | " +
                        "fullscreen  |";


class TmcEditor {

    /**
     * init editor params
     */
    init() {
        let _self = this
        tinymce.init({
            selector: "textarea#modal_template_editor_container",
            height: 250,
            toolbar1: toolBarOption,
            plugins: "table",
            theme: 'modern',
            image_advtab: true,
            content_css: [
                '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
                '//www.tinymce.com/css/codepen.min.css'
            ],
            content_css: ['tmc.css'],
            setup: _self._addVariablesButton.bind(this),
        });
    }

    _addVariablesButton(editor) {
        editor.addButton('variables', {
            text: 'Добавить переменную',
            icon: false,
            onclick:  () => {
                console.log('variables')
                editor.insertContent(`<p> editor contender </p>`);
            }
        })
    }
}

let templateMagager = new TemplateManager({}, new TmcEditor)
templateMagager.run()
