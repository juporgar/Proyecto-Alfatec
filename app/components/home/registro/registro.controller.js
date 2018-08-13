class RegistroController {
    constructor(datosService) {
        this.datosService = datosService;
        this.changeRole('Paciente');
    }
    
    addUser(formulario) {

        if(formulario.$invalid === true) {
            return
        } else {
        let date = this.user.fechadenacimiento
        this.user.id = `${Date.now()}${Math.round(Math.random()*100)}`;
        this.user.fechadenacimiento = `${date.getDate()}/${date.getMonth() +1 }/${date.getFullYear()}`;
        this.datosService.addUser(this.user)
        }
    }
    changeRole(role) {
        this.user = {};        
        this.user.tipo = role;
    }


    addProfesional(formularioProfesional) {

        if(formularioProfesional.$invalid === true) {
            return
        } else {                  
    
    
    let date = this.user.fechadenacimiento
    this.user.id = `${Date.now()}${Math.round(Math.random()*100)}`;
    this.user.fechadenacimiento = `${date.getDate()}/${date.getMonth() +1 }/${date.getFullYear()}`;
    this.datosService.addProfesional(this.user)
    }
}
changeRole(role) {
    this.user = {};        
    this.user.tipo = role;
    }
}


export default RegistroController;