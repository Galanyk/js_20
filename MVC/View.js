class View {
    static CLASSES = {
        CONTAINER: 'contauner',
        CONTAINER_INPUT: 'container_input',
        INPUT_LOGIN: 'input_login',
        INPUT_PASSWORD: 'input_password',
        BUTTON_LOGIN: 'button_login',
    };

    constructor(container) {
        this.container = container;
        this.$ListContainerEl =
            this.initView()
            .on('click', `.${View.CLASSES.BUTTON_LOGIN}`, (e) => this.onEnterClick(e))
        this.createContainerInput(container)
    };

    initView() {
        return $(`<div class="${View.CLASSES.CONTAINER}"></div>`);
    };

    createContainerInput($container) {
        const el = $(`<div class="${View.CLASSES.CONTAINER_INPUT}">
         <input  class="${View.CLASSES.INPUT_LOGIN}" type="text" placeholder="Login">
        <input  class="${View.CLASSES.INPUT_PASSWORD}" type="password" placeholder="Password">
        <button  class="${View.CLASSES.BUTTON_LOGIN}">Login</button></div>`)
        $container.prepend(el);
    };

    onEnterClick() {

    }
}