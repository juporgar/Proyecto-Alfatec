class RegistroController {
    constructor(datosService) {
        this.datosService = datosService;
        this.changeRole('Paciente');
    }
    
    addUser() {
        let date = this.user.fechadenacimiento
        this.user.fechadenacimiento = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
        this.user.id = `${Date.now()}${Math.round(Math.random()*100)}`;
        this.datosService.addUser(this.user)
    }
    changeRole(role) {
        this.user = {};        
        this.user.tipo = role;
    }
}

export default RegistroController;