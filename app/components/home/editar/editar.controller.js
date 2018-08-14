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
        console.log("hola");
        
        console.log(formulario);
        
        
        if( formulario.$invalid === true){
            
            return;                        
        }else{
            console.log("HOLLIIIIII!!!!!!");
            this.datosService.editUser(this.user);

            console.log("HOLLA!!!!!!");
            this.state.go('inicioComponent');
        }
    }
    editProfesional(formularioProfesional){
        console.log("hola");
        
        console.log(formularioProfesional);
        
        if( formularioProfesional.$invalid === true){
            return;                        
        }else{
            console.log("HOLLIIIIII!!!!!!PROFESIONAL!");
            this.datosService.editProfesional(this.user);

            console.log("Entraste profesional!!!!!!");
            this.state.go('inicioComponent');
        }
    }
}

export default EditarController;