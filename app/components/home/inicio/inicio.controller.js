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
                console.log(JSON.stringify(this.dataResult));
                
            })
    }
}

export default InicioController;
