import angular from 'angular';
import DatosService from './datos.service';
import {InicioComponent} from "./inicio/inicio.component";
import {RegistroComponent} from "./registro/registro.component";
import {EditarPacienteComponent} from "./editar/editarPaciente.component";
import {EditarProfesionalComponent} from "./editar/editarProfesional.component";
import {InfoPaciComponent} from "./información/infoPaciente.component";
import {InfoProfeComponent} from "./información/infoProfesional.component";
import {Error404} from "./404/error";

const home = angular

.module('home',[])
    .component('inicioComponent', InicioComponent)
    .component('registroComponent', RegistroComponent)
    .component('editarPacienteComponent', EditarPacienteComponent)
    .component('editarProfesionalComponent', EditarProfesionalComponent)
    .component('infoPaciComponent', InfoPaciComponent)
    .component('infoProfeComponent', InfoProfeComponent)
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
        .state('infoPaciComponent' , {
            url: '/infopaci/:userID',
            component:'infoPaciComponent'})
        .state('infoProfeComponent' , {
            url: '/infoprofe/:userID',
            component:'infoProfeComponent'})
        .state('editarPacienteComponent' , {
            url: '/editarpaciente/:userID',
            component:'editarPacienteComponent'})    
        .state('editarProfesionalComponent' , {
            url: '/editarprofesional/:userID',
            component:'editarProfesionalComponent'})    
    $urlRouterProvider.otherwise('/error404')                
    }).name

export default home