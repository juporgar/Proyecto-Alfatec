import angular from 'angular';
import RegistroService from './registro/registro.service';
import {InicioComponent} from "./inicio/inicio.component";
import {RegistroComponent} from "./registro/registro.component";
import {EditarComponent} from "./editar/editar.component";
import {InfoComponent} from "./información/info.component";
import {Error404} from "./404/error";

const home = angular

.module('home',[])
    .service('RegistroService', RegistroService)
    .component('inicioComponent', InicioComponent)
    .component('registroComponent', RegistroComponent)
    .component('editarComponent', EditarComponent)
    .component('infoComponent', InfoComponent)
    .component('error404', Error404)
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider
        .state('registroComponent' , {
            url: '/registro',
            component:'registroComponent'})
        .state('error404' , {
            url: '/error404',
            component:'error404'})
        .state('inicioComponent' , {
            url: '/inicio',
            component:'inicioComponent'})
        .state('infoComponent' , {
            url: '/info',
            component:'infoComponent'})
        .state('editarComponent' , {
            url: '/editar',
            component:'editarComponent'})    
    $urlRouterProvider.otherwise('/error404')                
    }).name

export default home