export default class datosService{
    constructor($http){
        this.$http = $http;
    }

    getData(){
        console.log("entro en getdata");
        
        return this.$http.get('/datos/info.json')
            .then(response=>response.data)//donde se guarda la información y la pasamos con nombre de data
            console.log(renponse);
            
        }
}