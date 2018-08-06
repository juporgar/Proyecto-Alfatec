class RegistroController{
    constructor(RegistroService){
        this.RegistroService = RegistroService;
        this.getDatos();
    }
    getDatos(){
        console.log("Entra en Datos");
        this.RegistroService.getDatos()
            .then(resultado=>{
                this.registroResultado = resultado.results;
                console.log(JSON.stringify(this.registroResultado));
                
            })
    }
}
export default RegistroController;