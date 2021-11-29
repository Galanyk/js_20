class View {
    static CLASSES = {
        CONTAINER: 'contauner',
        CONTAINER_INPUT: 'container_input',
        INPUT_LOGIN: 'input_login',
        INPUT_PASSWORD: 'input_password',
        BUTTON_LOGIN: 'button_login',
    };

    constructor(container, options) {
        this.options = options;
        this.container = container;
        this.createContainerInput(container)
        this.$ListContainerEl =
            this.initView()
    };

    initView() {
        return $(`<div class="${View.CLASSES.CONTAINER}"></div>`);
    };

    createContainerInput($container) {
        const el = $(`<div class="${View.CLASSES.CONTAINER_INPUT}">
         <input  class="${View.CLASSES.INPUT_LOGIN}" type="text" placeholder="Login">
        <input  class="${View.CLASSES.INPUT_PASSWORD}" type="password" placeholder="Password">
        <button  class="${View.CLASSES.BUTTON_LOGIN}">Login</button></div>`)
            .on('click', `.${View.CLASSES.BUTTON_LOGIN}`, (e) => this.onEnterClick(e))

        $container.prepend(el);
    };

    onEnterClick(e) {
        console.log('view enter')
        const login = $('input.input_login').val();
        const password = $('input.input_password').val();
        $('input.input_login').val('');
        $('input.input_password').val('');
        const userData = {
            uLogin: login,
            uPassword: password
        }

        console.log(this.options.onEnter(userData))

        // console.log('log', login, password)
        $.ajax({
            type: "POST",
            url: "http://localhost:5000/auth/login",
            data: {
                uLogin: login,
                uPassword: password
            },
            success: function(result) {
                console.log('success');
            },
            error: function(result) {
                console.log('error');
            }
        });
    }
}