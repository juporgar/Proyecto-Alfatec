class InfoController{   
    constructor(datosService, $location) {
        let path = $location.$$path.split('/')
        
        this.datosService = datosService;
        this.getNif(path[path.length -1]);
        
    }

    getNif(nif){
        this.datosService.getNif()
            .then(resultado=>{
                console.log(resultado);
                 
                this.users = resultado.filter(item => item.nif == +nif)[0];
                console.log(this.users)               
            })
    }
}

export default InfoController;