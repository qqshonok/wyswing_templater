const   toolBarOption = "undo redo  variables math_form";

const plugins = "table noneditable"
const fonts = ['//fonts.googleapis.com/css?family=Lato:300,300i,400,400i', '//www.tinymce.com/css/codepen.min.css']
class TmcEditor {
    /**
     * @param variableStorage
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
            text: 'System',
            icon: false,
            onclick:  () => {
                _self._systemVariable.dispatch({type: "ADD"})
                const lastAddedVariable = [..._self._systemVariable.getState()].pop()
                editor.insertContent(`<span class="variable mceNonEditable">${lastAddedVariable.name}</span>`)
            }
        }),
        editor.addButton('math_form', {
            text: 'Math',
            icon: false,
            onclick:  () => {
                let mathFormula  = tinymce.activeEditor.dom.create('span',{'class' : 'mceNonEditable math','contenteditable': false}, 'MATH')
                mathFormula.onClick=  () => console.log('s')
                tinymce.activeEditor.selection.setNode(mathFormula);
            }
        }),
         editor.on("click", function(editor)  {
            let classList = (editor.target.classList.value)
            if(classList.indexOf('math') !==-1) {
                document.querySelector('.adjust-panel').style.display == 'block' ?
                    document.querySelector('.adjust-panel').style.display = 'none' :  document.querySelector('.adjust-panel').style.display = 'block' 

            }
        });
    }
}