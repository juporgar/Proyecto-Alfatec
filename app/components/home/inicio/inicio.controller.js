class InicioController{
    constructor(datosService){
        this.datosService = datosService;
        this.getData();
    }

    getData(){
        console.log("Entra en Datos");
        this.datosService.getData()
            .then(resultado=>{
                this.dataResult = resultado;             
            })
    }
    
     deleteUser(nif){
            console.log(nif);
            this.datosService.deleteUser(nif);
     }
     
     deleteMedic(){
        console.log("Hola esto es para borrar medicos");
//            if(confirm('¿Estas seguro que deseás a todos los medicos? '))
                this.datosService.deleteMedic();
            }        
}

export default InicioController;