class InfoController{   
    constructor(datosService, $location) {
        let path = $location.$$path.split('/')        
        this.datosService = datosService;
        this.getID(path[path.length -1]);
    }

    getID(id){
        this.datosService.getData()
            .then(resultado =>{
                this.user = resultado.filter(item => item.id == + id)[0];
            })
    }
}

export default InfoController;