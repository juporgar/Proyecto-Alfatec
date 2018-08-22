class EditarController{   
    constructor(datosService, $state, $location) {
        this.state = $state;
        let path = $location.$$path.split('/') 
        this.datosService = datosService;
        this.getID(path[path.length -1]);
        this.user=[];
    }

    getID(id){
        this.datosService.getData()
            .then(resultado =>{                 
                this.user = resultado.filter(item => item.id == + id)[0];
            })
    }
    editUser(formulario){
        
        if( formulario.$invalid === true){
            
            return;                        
        }else{
            this.datosService.editUser(this.user);
            this.state.go('inicioComponent');
        }
    }
    editProfesional(formularioProfesional){
        if( formularioProfesional.$invalid === true){
            return;                        
        }else{
            this.datosService.editProfesional(this.user);
            this.state.go('inicioComponent');
        }
    }
}

export default EditarController;