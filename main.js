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
                let newSystemVaraible = this.variableStorage.add();
                editor.insertContent(`<p> editor contender </p>`);
            }
        })
    }
}


/**
 *
 */
class variableStorage {

    constructor() {
        this._variablePrefix = "R"
        this._storage = {};
        this.__lastVaiableNomber = 0;
    }

    /**
     * add next variable;
     */
    add() {
       let nextVariableName =  Object.keys(a).length == 0 ? `${this._variablePrefix}1`: `${this._variablePrefix}${this._lastVaiableNomber++}`
    }

    delete(variable) {

    }
}

let templateMagager = new TemplateManager({}, new TmcEditor)
templateMagager.run()




/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object,
 * or even an Immutable.js data structure. The only important part is that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * In this example, we use a `switch` statement and strings, but you can use a helper that
 * follows a different convention (such as function maps) if it makes sense for your
 * project.
 */
function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(counter)

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.

store.subscribe(() =>
    console.log(store.getState())
)

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch({ type: 'INCREMENT' })
// 1
store.dispatch({ type: 'INCREMENT' })
// 2
store.dispatch({ type: 'DECREMENT' })