import angular from 'angular';
import {InicioComponent} from "./inicio/inicio.component";
import {Error404} from "./404/error";

const home = angular
    .module('home',[])
    .component('error404', Error404)
    .component('inicioComponent', InicioComponent)
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider
        .state('error404' , {
            url: '/error404',
            component:'error404'})
        .state('inicio', {
            url: '/Inicio',
            component: 'inicioComponent'
        }) ;
    $urlRouterProvider.otherwise('/Inicio')                
    }).name

export default home