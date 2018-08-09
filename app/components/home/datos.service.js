export default class datosService {
    constructor($http) {
        this.$http = $http;
        this.users = [];
    }

    getData() {
        return this.$http.get('datos/info.json')
            .then(response => {
                this.users = response.data
                
                return this.users
            })
    }
    
    deleteUser(id) {
        console.log("Este es el:" + id);
        
        for (var i = 0; i < this.users.length; i++) {
            if (this.users[i].id === id) {
                var usuario = this.users[i]
                console.log(usuario);
                this.users.splice(i,1);
               
            }
        }
    }

    deleteMedic() {
        var profesiones = "Médico";       
        for (var i = this.users.length -1; i >= 0; i--) {
            console.log("Estos son los Médicos que tienes",  this.users[i].nombre , this.users[i].profesion);
            if (this.users[i].profesion === profesiones) {
                this.users.splice(i,1)               
            }
        }
    }
}