import controller from './editar.controller'
export const EditarProfesionalComponent = {
    bindings:{
        dataResult: '<'
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
									<input class="form-control" placeholder="Escribe el nº de colegiado" name="numerocolegiado" type="number" required>
								</div>
								<div>
									<p>Nombre</p> 
									<input class="form-control" placeholder="Escriba el nombre" name="nombreprofesional" type="text" required>
								</div>
								<div>
									<p>1º Apellido</p> 
									<input class="form-control" placeholder="Escriba el primero apellido" name="1apeprofesional" type="text" required>
								</div>
								<div>
									<p>2º Apellido</p> 
									<input class="form-control" placeholder="Escriba el segundo apellido" name="2apeprofesional" type="text">
								</div>
								<div>
								<p>Genero</p> 
									<select class="span3" id="subject" name="generoprofesional">
										<option selected value="na">
											Selecciona sexo:
										</option>						
										<option value="hombreprofesional">
											Hombre
										</option>
										<option value="mujerprofesional">
											Mujer
										</option>
									</select>
								</div>
								<div>
									<p>Fecha de nacimiento</p> 
									<input class="form-control" placeholder="Escribe tu fecha de cumpleaños" name="cumpleprofesional" type="date">
								</div>
								<div>
									<p>NIF o Pasaporte</p> 
									<input class="form-control" placeholder="Escribe tu NIF o Pasaporte" name="nifopasprofesional" type="text">
								</div>
								<div>	
									<p>Tipo de profesional</p> 
									<select class="span3" id="subject" name="profesion">
										<option selected value="na">
											Selecciona profesión:
										</option>						
										<option value="medico">
											Médico
										</option>
										<option value="enfermero">
											Enfermero
										</option>
										<option value="administrativo">
											Administrativo
										</option>
									</select>
								</div>
								<br>
								<h3>Dirección</h3>
								<div>
									<p>Calle</p> 
									<input class="form-control" placeholder="Escribe tu calle" name="calleprofesional" type="text">
								</div>
								<div>
									<p>Numero</p> 
									<input class="form-control" placeholder="Numero de patio" name="patioprofesional" type="number">
								</div>
								<div>
									<p>Puerta</p> 
									<input class="form-control" placeholder="Numero de puerta" name="puertaprofesional" type="text">
								</div>
								<div>
									<p>Código Postal</p> 
									<input class="form-control" placeholder="Escribe el Código Postal" name="postalprofesional" type="number">
								</div>
								<div>
									<p>Ciudad</p> 
									<input class="form-control" placeholder="Escribe tu Ciudad" name="ciudadprofesional" type="text">
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