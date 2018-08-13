class InicioController{
    constructor(datosService, $scope){
        this.datosService = datosService;
        this.dataResult = [];
        this.scope = $scope;
        this.getData();
    }

    getData(){
        this.datosService.getData()
        .then(resultado=>{
            this.dataResult = resultado;  
            console.log('inicio getData',  this.dataResult, resultado);
            this.scope.$apply();
                return resultado;    
            })
    }
    
     deleteUser(id){
            this.datosService.deleteUser(id);

            $('#EliminarUsers'+id).modal('hide')
     }
     
     deleteMedic(){
                this.datosService.deleteMedic();
            }        
}

export default InicioController;