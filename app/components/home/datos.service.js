import {promises} from "fs";

export default class datosService {
    constructor($http) {
        this.$http = $http;
    }

    getData() {
        console.log('getData');

        return new Promise((resolve, reject) => {
            this.users = JSON.parse(localStorage.getItem('users'))
            if (this.users === null) {
                this.getJson()
                    .then(this.saveData.bind(this))
                    .then(data => {
                        console.log(data);

                       resolve(data) 
                    })
                   
            } else {
                resolve(this.users)
            }
        })
    }

    getJson() {
        console.log('getJson');

        return new Promise((resolve, reject) => {
            this.$http.get('datos/info.json')
                .then(response => {
                    this.users = response.data
                    console.log(this.users);

                    resolve(this.users)
                })
        })
    }

    saveData() {
        console.log('saveData', this.users);

        localStorage.setItem('users', JSON.stringify(this.users))
        console.log('guardado');
        return this.users
    }
    deleteUser(id) {
        for (var i = 0; i < this.users.length; i++) {
            if (this.users[i].id === id) {
                var usuario = this.users[i]
                this.users.splice(i, 1);
            }
        }
        this.saveData();
    }

    deleteMedic() {
        var profesiones = "Médico";
        for (var i = this.users.length - 1; i >= 0; i--) {
            if (this.users[i].profesion === profesiones) {
                this.users.splice(i, 1)
            }
        }
        this.saveData();
    }

    editUser(user) {
        for (var i = 0; i < this.users.length; i++) {
            if (this.users[i].id == user.id) {
                this.users[i] = user
            }
        }
        this.saveData();
    }
    editProfesional(user) {
        for (var i = 0; i < this.users.length; i++) {
            if (this.users[i].id == user.id) {
                this.users[i] = user
            }
        }
        this.saveData();
    }

    addUser(user) {
        this.users.push(user)
        this.saveData()
    }
    addProfesional(user) {
        this.users.push(user)
        this.saveData()
    }
}