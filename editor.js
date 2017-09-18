const   toolBarOption = "undo redo | variables |" +
    "fontselect fontsizeselect lineheightselect | bold italic | alignleft " +
    "aligncenter alignright alignjustify | bullist " +
    "numlist outdent indent | pagebreak | " +
    "fullscreen  |";

const plugins = "table"
const fonts = ['//fonts.googleapis.com/css?family=Lato:300,300i,400,400i', '//www.tinymce.com/css/codepen.min.css']
class TmcEditor {

    /**
     * @param variableStor
     */
    constructor(variableStorage) {
        /**
         * system variable storage
         * @type object
         * @private
         */
        this._systemVariable = variableStorage
    }

    init() {
        let _self = this
        tinymce.init({
            selector: "textarea#modal_template_editor_container",
            height: 250,
            toolbar1: toolBarOption,
            plugins: plugins,
            theme: 'modern',
            image_advtab: true,
            content_css: fonts,
            content_css: ['tmc.css'],
            setup: _self._addVariablesButton.bind(this),
        });
    }

    /**
     * @param editor
     * @private
     */
    _addVariablesButton(editor) {
        let _self = this
        editor.addButton('variables', {
            text: 'Добавить переменную',
            icon: false,
            onclick:  () => {
               // _self._systemVariable.dispatch({type: "ADD"})
                editor.insertContent(`<p> editor contender </p>`)
            }
        })
    }
}