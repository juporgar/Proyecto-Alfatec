import controller from './editar.controller'
export const EditarProfesionalComponent = {
    bindings:{
        user: '<'
    },
    controller,
	template: `
    <section id="tabs">
	<div class="container">
		<h6 class="section-title h1">Panel para editar profesionales</h6>
		<div class="row">
			<div class="col-xs-12 ">
				<div class="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
					<div class="tab-pane fade show active" id="profesional" role="tabpanel" aria-labelledby="nav-home-tab">
						<form>
							<h3>datos personales</h3>
								<div>
									<p>Nº colegiado</p> 
									<input ng-model="$ctrl.user.colegiado" class="form-control" placeholder="Escriba el nº de colegiado" name="numerocolegiado" type="text" required>
								</div>
								<div>
									<p>Nombre</p> 
									<input ng-model="$ctrl.user.nombre" class="form-control" placeholder="Escriba el nombre" name="nombreprofesional" type="text" required>
								</div>
								<div>
									<p>1º Apellido</p> 
									<input ng-model="$ctrl.user.primerApellido" class="form-control" placeholder="Escriba el primero apellido" name="1apeprofesional" type="text" required>
								</div>
								<div>
									<p>2º Apellido</p> 
									<input  ng-model="$ctrl.user.segundoApellido" class="form-control" placeholder="Escriba el segundo apellido" name="2apeprofesional" type="text">
								</div>
								<div> 
									<p>Genero</p> 
									<input  ng-model="$ctrl.user.genero" class="form-control" placeholder="Hombre o Mujer" name="2apeprofesional" type="text">
								</div>
								<div>
									<p>Fecha de nacimiento</p> 
									<input  class="form-control" placeholder="Escribe tu fecha de cumpleaños" ng-model="$ctrl.user.fechadenacimiento" name="cumpleprofesional"  type="text">
								</div>
								<div>
									<p>NIF o Pasaporte</p> 
									<input ng-model="$ctrl.user.nif" class="form-control" placeholder="Escribe tu NIF o Pasaporte" name="nifopasprofesional" type="text">
								</div>
								<div>	
									<p>Tipo de profesional</p>
									<input ng-model="$ctrl.user.profesion" class="form-control" placeholder="Escribe la profesion que tiene" name="nifopasprofesional" type="text">
								</div>
								<br>
								<h3>Dirección</h3>
								<div>
									<p>Calle</p> 
									<input class="form-control" ng-model="$ctrl.user.calle" placeholder="Escribe tu calle" name="calleprofesional" type="text">
								</div>
								<div>
									<p>Numero</p> 
									<input class="form-control" placeholder="Numero de patio" ng-model="$ctrl.user.numero" name="patioprofesional" type="text">
								</div>
								<div>
									<p>Puerta</p> 
									<input class="form-control" placeholder="Numero de puerta" name="puertaprofesional" ng-model="$ctrl.user.puerta" type="text">
								</div>
								<div>
									<p>Código Postal</p> 
									<input class="form-control" ng-model="$ctrl.user.postal" placeholder="Escribe el Código Postal" name="postalprofesional" type="text">
								</div>
								<div>
									<p>Ciudad</p> 
									<input class="form-control" placeholder="Escribe tu Ciudad" ng-model="$ctrl.user.ciudad" name="ciudadprofesional" type="text">
								</div>
								<br>
						</form>		
					</div>
				</div>			
			</div>
		</div>
		<div class="card-body">
			<div class="row">
				<div class="col-md-5">
					<button type="submit" class="btn btn-primary">
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