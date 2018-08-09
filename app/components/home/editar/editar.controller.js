class EditarController{   
    constructor(datosService, $location) {
        let path = $location.$$path.split('/')
        
        this.datosService = datosService;
        this.getID(path[path.length -1]);
        
    }

    getID(id){
        this.datosService.getData()
            .then(resultado =>{
                console.log(resultado);
                 
                this.dataResult = resultado.filter(item => item.id == + id)[0];
                console.log(this.dataResult)               
            })
    }
}

export default EditarController;