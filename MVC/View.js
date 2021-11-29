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
        this.createContainerInput(container);
        this.$ListContainerEl =
            this.initView();
    };

    initView() {
        return $(`<div class="${View.CLASSES.CONTAINER}"></div>`);
    };

    createContainerInput($container) {
        const el = $(`<div class="${View.CLASSES.CONTAINER_INPUT}">
         <input  class="${View.CLASSES.INPUT_LOGIN}" type="text" placeholder="Login">
        <input  class="${View.CLASSES.INPUT_PASSWORD}" type="password" placeholder="Password">
        <button  class="${View.CLASSES.BUTTON_LOGIN}">Login</button></div>`)
            .on('click', `.${View.CLASSES.BUTTON_LOGIN}`, (e) => this.onEnterClick(e));
        $container.prepend(el);
    };

    onEnterClick(e) {
        const login = $('input.input_login').val();
        const password = $('input.input_password').val();
        $('input.input_login').val('');
        $('input.input_password').val('');
        const userData = {
            uLogin: login,
            uPassword: password
        };
        this.login(userData)
        console.log(this.options.onEnter(userData))
    };

    login(userData) {
        console.log('Pr', Promise.resolve(userData))
        return Promise.resolve(userData);
        // return fetch('https://jsonplaceholder.typicode.com/posts', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(userData)
        //     })
        //     .then((response) => response.json())
        //     .then((json) => console.log(json));
    };
}