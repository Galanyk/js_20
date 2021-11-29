class Controller {
    // static API = "https://jsonplaceholder.typicode.com";
    // static ENVIRONMENT = {
    //     USERS: {
    //         getUsers: "/users",
    //     },
    // };

    constructor($container) {
        this.$container = $container;
        // this.Model = new Model(TodoListController.API + TodoListController.ENVIRONMENT.USERS.getUsers);

        this.view = new View($container, {
            onEnter: (userData) => this.enterLogin(userData),
        })
        this.model = new Model();

    };

    initViewRender() {
        this.view.renderInput();
        this.view.appendTo(this.$container);
    };

    enterLogin(userData) {
        console.log('controler enter');
        return this.model.loginEnter(userData);
    };
}