import controller from './info.controller'
export const InfoPaciComponent = {
    bindings:{
        user: '<'
    },
    controller,
	template: `
<h3>SECCIÓN DE INFORMACIÓN DEL PACIENTE </h3>
<div class="row">
    <div class="col-md-12">
        <table class="table table-hover ">
            <thead class="bg-light ">
            <tr>
                <th>NHC</th>
                <th>Nombre</th>
                <th>1º Apellido</th>
                <th>2º Apellido</th>
                <th>Género</th>
                <th>Fecha de nacimiento</th>
                <th>NIF o Pasaporte</th>
                <th>Calle</th>
                <th>Numero</th>
                <th>Puerta</th>
                <th>Código Postal</th>
                <th>Ciudad</th>
                <th>Nombre de aseguradora</th>
                <th>Tipo de seguro</th>
                <th>Nº de tarjeta</th>
            </tr>
            </thead>
            <tbody>                                     
            <tr>  
                <td>{{$ctrl.user.nhc}}</td>
                <td>{{$ctrl.user.nombre}}</td>
                <td>{{$ctrl.user.segundoApellido}}</td>
                <td>{{$ctrl.user.primerApellido}}</td>
                <td>{{$ctrl.user.genero}}</td>
                <td>{{$ctrl.user.fechadenacimiento}}</td>
                <td>{{$ctrl.user.nif}}</td>
                <td>{{$ctrl.user.calle}}</td>
                <td>{{$ctrl.user.numero}}</td>
                <td>{{$ctrl.user.puerta}}</td>
                <td>{{$ctrl.user.postal}}</td>
                <td>{{$ctrl.user.ciudad}}</td>
                <td>{{$ctrl.user.aseguradora}}</td>
                <td>{{$ctrl.user.tipodeseguro}}</td>
                <td>{{$ctrl.user.numerodetarjeta}}</td>
                </tr>
                </table>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-5">
                            <a ui-sref="inicioComponent" class="btn btn-sm btn-primary">
                                Volver a inicio
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
}