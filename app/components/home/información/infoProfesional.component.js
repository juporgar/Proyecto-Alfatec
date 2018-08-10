import controller from './info.controller'
export const InfoProfeComponent = {
    bindings:{
        user: '<'
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
            <tr>  
                <td>{{$ctrl.user.colegiado}}</td>
                <td>{{$ctrl.user.nombre}}</td>
                <td>{{$ctrl.user.primerApellido}}</td>
                <td>{{$ctrl.user.segundoApellido}}</td>
                <td>{{$ctrl.user.genero}}</td>
                <td>{{$ctrl.user.fechadenacimiento}}</td>
                <td>{{$ctrl.user.nif}}</td>
                <td>{{$ctrl.user.profesion}}</td>
                <td>{{$ctrl.user.calle}}</td>
                <td>{{$ctrl.user.numero}}</td>
                <td>{{$ctrl.user.puerta}}</td>
                <td>{{$ctrl.user.postal}}</td>
                <td>{{$ctrl.user.ciudad}}</td>
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