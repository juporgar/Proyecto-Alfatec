import angular from 'angular';
import DatosService from './datos.service';
import {InicioComponent} from "./inicio/inicio.component";
import {RegistroComponent} from "./registro/registro.component";
import {EditarComponent} from "./editar/editar.component";
import {InfoComponent} from "./información/info.component";
import {Error404} from "./404/error";

const home = angular

.module('home',[])
    .component('inicioComponent', InicioComponent)
    .component('registroComponent', RegistroComponent)
    .component('editarComponent', EditarComponent)
    .component('infoComponent', InfoComponent)
    .component('error404', Error404)
    .service('datosService', DatosService)
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider
        .state('registroComponent' , {
            url: '/registro',
            component:'registroComponent'})
        .state('error404' , {
            url: '/error404',
            component:'error404'})
        .state('inicioComponent' , {
            url: '/',
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