class InicioController{
    constructor(datosService){
        this.datosService = datosService;
        this.getData();
    }

    getData(){
        this.datosService.getData()
            .then(resultado=>{
                this.dataResult = resultado;             
            })
    }
    
     deleteUser(id){
            console.log(id);
            this.datosService.deleteUser(id);

            $('#EliminarUsers'+id).modal('hide')
     }
     
     deleteMedic(){
                this.datosService.deleteMedic();
            }        
}

export default InicioController;