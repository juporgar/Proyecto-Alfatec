class RegistroController {
    constructor(datosService) {
        this.datosService = datosService;
        this.changeRole('Paciente');
    }
    
    addUser(formulario) {

        if( formulario.nhc.$invalid === true || formulario.nombre.$invalid === true || formulario.primerApellido.$invalid === true){
            console.log(formulario.nhc.$invalid);
            console.log(formulario.nombre.$invalid);
            console.log(formulario.primerApellido.$invalid);
            return;                        
        }
        let date = this.user.fechadenacimiento
        this.user.id = `${Date.now()}${Math.round(Math.random()*100)}`;
        this.user.fechadenacimiento = `${date.getDate()}/${date.getMonth() +1 }/${date.getFullYear()}`;
        this.datosService.addUser(this.user)
    }
    changeRole(role) {
        this.user = {};        
        this.user.tipo = role;
    }


    addProfesional(formularioProfesional) {

    if( formularioProfesional.numerocolegiado.$invalid === true || formularioProfesional.nombreprofesional.$invalid === true || formularioProfesional.apellidoProfesional.$invalid === true){
        console.log(formularioProfesional.numerocolegiado.$invalid);
        console.log(formularioProfesional.nombreprofesional.$invalid);
        console.log(formularioProfesional.apellidoProfesional.$invalid);
        return;                        
    }
    
    let date = this.user.fechadenacimiento
    this.user.id = `${Date.now()}${Math.round(Math.random()*100)}`;
    this.user.fechadenacimiento = `${date.getDate()}/${date.getMonth() +1 }/${date.getFullYear()}`;
    this.datosService.addProfesional(this.user)
}
changeRole(role) {
    this.user = {};        
    this.user.tipo = role;
    }
}


export default RegistroController;