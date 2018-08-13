class EditarController{   
    constructor(datosService, $location) {
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
        console.log("hola");
        
        console.log(formulario);
        
        
        if( formulario.$invalid === true){
            return;                        
        }else{
            this.datosService.editUser(this.user);
        }
    }
    editProfesional(formularioProfesional){
        
        if( formularioProfesional.$invalid === true){
            return;                        
        }else{
            this.datosService.editUser(this.user);
        }
    }
}

export default EditarController;