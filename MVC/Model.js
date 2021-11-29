class Model {

    mockData = {
        login: 'asd',
        password: '12345'
    }
    constructor() {

    }

    loginEnter(userData) {
        return this.mockData.login === userData.uLogin &&
            this.mockData.password === userData.uPassword;
    }
}