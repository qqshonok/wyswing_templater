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