export default class datosService {
    constructor($http) {
        this.$http = $http;
        this.users = [];
        this.loadData();
    }

     getData() {
        return Promise.resolve(this.users);        
     }

     saveData(){
        localStorage.setItem('users',JSON.stringify(this.users))
        console.log('guardado');      
     }
     getJson(){
          return this.$http.get('datos/info.json')
              .then(response => {
                  this.users = response.data                          
                  return this.users
              })
     }

     loadData(){
        this.users = JSON.parse(localStorage.getItem('users'))
        // if(typeof this.user === 'undefined') {
        //     this.getJson()
        //     console.log(this.user);            
        // }
     }
    
    deleteUser(id) {   
        for (var i = 0; i < this.users.length; i++) {
            if (this.users[i].id === id) {
                var usuario = this.users[i]
                this.users.splice(i,1);              
            }
        }
        this.saveData();
    }

    deleteMedic() {
        var profesiones = "Médico";       
        for (var i = this.users.length -1; i >= 0; i--) {
            if (this.users[i].profesion === profesiones) {
                this.users.splice(i,1)               
            }
        }
        this.saveData();
    }

    editUser(user){
        for(var i = 0; i < this.users.length; i++){
            if(this.users[i].id == user.id){
               this.users[i] = user
            }
        }
        this.saveData();
    }
    editProfesional(user){
        for(var i = 0; i < this.users.length; i++){
            if(this.users[i].id == user.id){
               this.users[i] = user
            }
        }
        this.saveData();
    }

    addUser(user){
        this.users.push(user)
        this.saveData()
    }
    addProfesional(user){
        this.users.push(user)
        this.saveData()
    }
}