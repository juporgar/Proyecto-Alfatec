import angular from 'angular';
import {InicioComponent} from "./inicio/inicio.component";
import {RegistroComponent} from "./registro/registro.component";
import {Error404} from "./404/error";

const home = angular
    .module('home',[])
    .component('inicioComponent', InicioComponent)
    .component('registroComponent', RegistroComponent)
    .component('error404', Error404)
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider
        .state('registroComponent' , {
            url: '/registro',
            component:'registroComponent'})
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