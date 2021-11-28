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

        this.view = new View($container)
            //  this.todoListModel.getListItems().then(() => this.initViewRender());
            // this.view.createContainerInput(this.$container);
    };

    initViewRender() {
        this.view.renderInput();
        this.view.appendTo(this.$container);
    };
}