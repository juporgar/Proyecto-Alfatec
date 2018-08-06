export default class RegistroService{
    constructor($http){
        this.$http = $http;
    }

    getDatos(){
        return this.$http.get('./datos/json.json')
            .then(response=>response.data)
            console.log(this.$http.get('./datos/json.json'));
    }
}