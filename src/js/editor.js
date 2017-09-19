const   toolBarOption = "undo redo  variables math_form select_field";
const plugins = "table noneditable"
class TmcEditor {

    /**
     * init editor
     */
    init() {
        let _self = this
        tinymce.init({
            selector: "textarea#modal_template_editor_container",
            height: 250,
            toolbar1: toolBarOption,
            plugins: plugins,
            theme: 'modern',
            image_advtab: true,
            content_css: ['src/css/tmc.css'],
            setup: _self._addVariablesButton.bind(this),
        });
    }


    /**
     * set storage
     * @param storage
     */
    setStorage(storage) {
        this._storage = storage
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
                _self._storage.dispatch({type: ADD_VAR})
                let state = _self._storage.getState().variableReducer
                const lastAddedVariable = [...state].pop()
                editor.insertContent(`<span class="variable mceNonEditable">${lastAddedVariable.name}</span>`)
            }
        })
        ,
        editor.addButton('math_form', {
            text: 'Math',
            icon: false,
            onclick:  () => {
                _self._storage.dispatch({type: ADD_MATH})
                let state = _self._storage.getState().mathReducer
                const lastAddedMath = [...state].pop()
                editor.insertContent(`<span class="math mceNonEditable">${lastAddedMath.name}</span>`)
            }
        }),
        editor.addButton('select_field', {
            text: 'List',
            icon: false,
            onclick:  () => {
                _self._storage.dispatch({type: ADD_LIST})
                let state = _self._storage.getState().listReducer
                const lastAddedList = [...state].pop()
                editor.insertContent(`<span class="list mceNonEditable">${lastAddedList.name}</span>`)
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