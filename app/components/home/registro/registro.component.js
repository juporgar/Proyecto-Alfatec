export const RegistroComponent = {
	template: `
<section id="tabs">
	<div class="container">
		<h6 class="section-title h1">Panel de registro</h6>
		<div class="row">
			<div class="col-xs-12 ">
				<nav>
					<div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
						<a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#pacientes" role="tab" aria-controls="nav-home" aria-selected="true">Paciente</a>
						<a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#profesional" role="tab" aria-controls="nav-profile" aria-selected="false">Profesional</a>
					</div>
				</nav>
				<div class="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
					<div class="tab-pane fade show active" id="pacientes" role="tabpanel" aria-labelledby="nav-home-tab">
						<form>
							<h3>datos personales</h3>
								<div>
									<p>NHC *</p> 
									<input class="form-control" placeholder="número de historia clinica" name="nhc" type="number" required>
										<div class="invalid-feedback" id="advicePassDiferent">
											Tienes que introducir el número de la historia clínica del Paciente
										</div>
									</div>
								<div>
									<p>Nombre *</p> 
									<input class="form-control" placeholder="Escriba el nombre" name="nombre" type="text" required>
								</div>
									<div class="invalid-feedback" id="advicePassDiferent">
										Escribe el nombre del Paciente
									</div>
								<div>
									<p>1º Apellido *</p> 
									<input class="form-control" placeholder="Escriba el primero apellido" name="1ape" type="text" required>
								</div>
									<div class="invalid-feedback" id="advicePassDiferent">
										Tienes que escribir el primer apellido del Paciente
									</div>
								<div>
									<p>2º Apellido</p> 
									<input class="form-control" placeholder="Escriba el segundo apellido" name="2ape" type="text">
								</div>
								<div>
									<p>Genero</p> 
									<select class="span3" id="subject" name="genero">
										<option selected value="na">
											Selecciona sexo:
										</option>						
										<option value="hombrepaciente">
											Hombre
										</option>
										<option value="mujerpaciente">
											Mujer
										</option>
									</select>
								</div>
								<div>
									<p>Fecha de nacimiento</p> 
									<input class="form-control" placeholder="Escribe tu fecha de cumpleaños" name="cumple" type="date">
								</div>
								<div>
									<p>NIF o Pasaporte</p> 
									<input class="form-control" placeholder="Escribe tu NIF o Pasaporte" name="nifopasa" type="text">
								</div>
								<br>
							<h3>Dirección</h3>
								<div>
									<p>Calle</p> 
									<input class="form-control" placeholder="Escribe tu calle" name="calle" type="text">
								</div>
								<div>
									<p>Numero</p> 
									<input class="form-control" placeholder="Numero de patio" name="patio" type="number">
								</div>
								<div>
									<p>Puerta</p> 
									<input class="form-control" placeholder="Numero de puerta" name="puerta" type="text">
								</div>
								<div>
									<p>Código Postal</p> 
									<input class="form-control" placeholder="Escribe el Código Postal" name="postal" type="number">
								</div>
								<div>
									<p>Ciudad</p> 
									<input class="form-control" placeholder="Escribe tu Ciudad" name="ciudad" type="text">
								</div>
								<br>
							<h3>Lista aseguradora</h3>
								<div>
									<p>Nombre aseguradora</p> 
									<input class="form-control" placeholder="Escribe el nombre de la aseguradora" name="aseguradora" type="text">
								</div>
								<div>
									<p>Tipo de seguro</p> 
										<select class="span3" id="subject" name="tipodeseguro">
											<option selected value="na">
												Selecciona uno:
											</option>						
											<option value="salud">
												Salud
											</option>
											<option value="familiar">
												Familiar
											</option>						
											<option value="dental">
												Dental
											</option>										
											<option value="otros">
												Otros
											</option>
										</select>
								</div>
								<div>
									<p>Numero de la tarjeta</p> 
									<input class="form-control" placeholder="Escribe el numero de la tarjeta" name="tarjeta" type="number">
								</div>
						</form>
					</div>
					<div class="tab-pane fade" id="profesional" role="tabpanel" aria-labelledby="nav-profile-tab">
						<form>
							<h3>datos personales</h3>
								<div>
									<p>Nº colegiado *</p> 
									<input class="form-control" placeholder="Escribe el nº de colegiado" name="numerocolegiado" type="number" required>
								</div>
									<div class="invalid-feedback" id="advicePassDiferent">
										Por favor, escribe el nº de colegiado
									</div>
								<div>
									<p>Nombre *</p> 
									<input class="form-control" placeholder="Escriba el nombre" name="nombreprofesional" type="text" required>
								</div>
									<div class="invalid-feedback" id="advicePassDiferent">
										Debes de escribir el nombre 
									</div>
								<div>
									<p>1º Apellido *</p> 
									<input class="form-control" placeholder="Escriba el primero apellido" name="1apeprofesional" type="text" required>
								</div>
									<div class="invalid-feedback" id="advicePassDiferent">
										Debes de escribir el apellido
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
					<button type="submit" value="Añadir" class="btn btn-info">
						Añadir Registro
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