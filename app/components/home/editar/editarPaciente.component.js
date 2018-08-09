import controller from './editar.controller'
export const EditarPacienteComponent = {
    bindings:{
        user: '<'
    },
    controller,
	template: `
<section id="tabs">
	<div class="container">
		<h6 class="section-title h1">Panel para editar paciente</h6>
		<div class="row">
			<div class="col-xs-12 ">
				<div class="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
					<div class="tab-pane fade show active" id="pacientes" role="tabpanel" aria-labelledby="nav-home-tab">
						<form>
							<h3>datos personales</h3>
								<div>
									<p>NHC</p> 
									<input class="form-control" ng-model="$ctrl.user.nhc" placeholder="número de historia clinica" name="usua" type="text" required>
								</div>
								<div>
									<p>Nombre</p> 
									<input class="form-control" ng-model="$ctrl.user.nombre" placeholder="Escriba el nombre" name="usua" type="text" required>
								</div>
								<div>
									<p>1º Apellido</p> 
									<input class="form-control" ng-model="$ctrl.user.primerApellido" placeholder="Escriba el primero apellido" name="usua" type="text" required>
								</div>
								<div>
									<p>2º Apellido</p> 
									<input class="form-control" ng-model="$ctrl.user.segundoApellido" placeholder="Escriba el segundo apellido" name="usua" type="text">
								</div>
								<div>
									<p>Genero</p> 
									<input class="form-control" ng-model="$ctrl.user.genero" placeholder="Hombre o Mujer" name="usua" type="text">
								</div>
								<div>
									<p>Fecha de nacimiento</p> 
									<input class="form-control" ng-model="$ctrl.user.fechadenacimiento" placeholder="Escribe tu fecha de cumpleaños" name="usua" type="text">
								</div>
								<div>
									<p>NIF o Pasaporte</p> 
									<input class="form-control" ng-model="$ctrl.user.nif" placeholder="Escribe tu NIF o Pasaporte" name="usua" type="text">
								</div>
								<br>
							<h3>Dirección</h3>
								<div>
									<p>Calle</p> 
									<input class="form-control" ng-model="$ctrl.user.calle" placeholder="Escribe tu calle" name="usua" type="text">
								</div>
								<div>
									<p>Numero</p> 
									<input class="form-control" type="text" string-to-number ng-model="$ctrl.user.numero" placeholder="Numero de patio" name="usua" >
								</div>
								<div>
									<p>Puerta</p> 
									<input class="form-control" ng-model="$ctrl.user.puerta" placeholder="Numero de puerta" name="usua" type="text">
								</div>
								<div>
									<p>Código Postal</p> 
									<input class="form-control" ng-model="$ctrl.user.postal" placeholder="Escribe el Código Postal" name="usua" type="text">
								</div>
								<div>
									<p>Ciudad</p> 
									<input class="form-control" ng-model="$ctrl.user.ciudad" placeholder="Escribe tu Ciudad" name="usua" type="text">
								</div>
								<br>
							<h3>Lista aseguradora</h3>
								<div>
									<p>Nombre aseguradora</p> 
									<input class="form-control" ng-model="$ctrl.user.aseguradora" placeholder="Escribe el nombre de la aseguradora" name="usua" type="text">
								</div>
								<div>
									<p>Tipo de seguro</p> 
									<input class="form-control" ng-model="$ctrl.user.tipodeseguro" placeholder="Escriba el tipo de seguro" name="usua" type="text">
								</div>
								<div>
									<p>Numero de la tarjeta</p> 
									<input class="form-control" ng-model="$ctrl.user.numerodetarjeta" placeholder="Escribe el numero de la tarjeta" name="usua" type="text">
								</div>
								</form>		
								</div>
							</div>			
						</div>
					</div>
					<div class="card-body">
						<div class="row">
							<div class="col-md-5">
								<button type="submit" ng-click="$ctrl.editUser()" class="btn btn-primary">
									Editar
								</button>
							</div>
							<div class="col-md-5">
								<a ui-sref="inicioComponent" class="btn btn-sm btn-primary">
									Volver a inicio
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
    `
}