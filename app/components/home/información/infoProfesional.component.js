import controller from './info.controller'
export const InfoProfeComponent = {
    bindings:{
        dataResult: '<'
    },
    controller,
	template: `
<h3>SECCIÓN DE INFORMACIÓN DEL PROFESIONAL </h3>
<div class="row">
    <div class="col-md-12">
        <table class="table table-hover ">
            <thead class="bg-light ">
            <tr>
                <th>Nºcolegiado</th>
                <th>Nombre</th>
                <th>1º Apellido</th>
                <th>2º Apellido</th>
                <th>Género</th>
                <th>Fecha de nacimiento</th>
                <th>NIF o Pasaporte</th>
                <th>Tipo de profesional</th>
                <th>Calle</th>
                <th>Numero</th>
                <th>Puerta</th>
                <th>Código Postal</th>
                <th>Ciudad</th>
            </tr>
            </thead>
            <tbody>                                     
            <tr ng-repeat="user in $ctrl.dataResult track by user.nif">  
                <td>{{user.ncolegiado}}</td>
                <td>{{user.nombre}}</td>
                <td>{{user.primerApellido}}</td>
                <td>{{user.segundoApellido}}</td>
                <td>{{user.genero}}</td>
                <td>{{user.fechadenacimiento}}</td>
                <td>{{user.nif}}</td>
                <td>{{user.profesion}}</td>
                <td>{{user.calle}}</td>
                <td>{{user.numero}}</td>
                <td>{{user.puerta}}</td>
                <td>{{user.postal}}</td>
                <td>{{user.ciudad}}</td>
            </tr>
        </table>
    </div>
</div>
    `
}