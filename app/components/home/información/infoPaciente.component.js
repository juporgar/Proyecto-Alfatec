import controller from './info.controller'
export const InfoPaciComponent = {
    bindings:{
        user: '<'
    },
    controller,
	template: `
<section id="tabs">
	<div class="container">
    <h3>SECCIÓN DE INFORMACIÓN DEL PACIENTE </h3>
		<div class="row">
			<div class="col-xs-12 ">
				<div class="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
					<div class="tab-pane fade show active" id="pacientes" role="tabpanel" aria-labelledby="nav-home-tab">
						<form>
							<h3>datos personales</h3>
								<div>
									<p>NHC: {{$ctrl.user.nhc}}</p> 
									
								</div>
								<div>
									<p>Nombre: {{$ctrl.user.nombre}}</p> 
								</div>
								<div>
									<p>1º Apellido: {{$ctrl.user.primerApellido}}</p> 
								</div>
								<div>
									<p>2º Apellido: {{$ctrl.user.segundoApellido}}</p> 
								</div>
								<div>
									<p>Genero: {{$ctrl.user.genero}}</p> 
								</div>
								<div>
									<p>Fecha de nacimiento: {{$ctrl.user.fechadenacimiento}}</p> 
								</div>
								<div>
									<p>NIF o Pasaporte: {{$ctrl.user.nif}}</p> 
								</div>
								<br>
							<h3>Dirección</h3>
								<div>
									<p>Calle: {{$ctrl.user.calle}}</p> 
								</div>
								<div>
									<p>Numero: {{$ctrl.user.numero}}</p> 
								</div>
								<div>
									<p>Puerta: {{$ctrl.user.puerta}}</p> 
								</div>
								<div>
									<p>Código Postal: {{$ctrl.user.postal}}</p> 
								</div>
								<div>
									<p>Ciudad: {{$ctrl.user.ciudad}}</p> 
								</div>
								<br>
							<h3>Lista aseguradora</h3>
								<div>
									<p>Nombre aseguradora: {{$ctrl.user.aseguradora}}</p>
								</div>
								<div>
									<p>Tipo de seguro: {{$ctrl.user.tipodeseguro}}</p> 
									<p name="usua" ></p>
								</div>
								<div>
									<p>Numero de la tarjeta: {{$ctrl.user.numerodetarjeta}} </p> 
								</div>
								</form>		
								</div>
							</div>			
						</div>
					</div>
                    <div class="card-body">
                        <div class="row">
					        <div class="col-md-5"></div>   
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