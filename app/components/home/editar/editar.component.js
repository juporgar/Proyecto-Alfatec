export const EditarComponent = {
	template: `
<section id="tabs">
	<div class="container">
		<h6 class="section-title h1">Panel de Editar</h6>
		<div class="row">
			<div class="col-xs-12 ">
				<nav>
					<div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
						<a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#pacientes" role="tab" aria-controls="nav-home" aria-selected="true">Paciente</a>
					</div>
				</nav>
				<div class="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
					<div class="tab-pane fade show active" id="pacientes" role="tabpanel" aria-labelledby="nav-home-tab">
						<form>
							<h3>datos personales</h3>
								<div>
									<p>NHC</p> 
									<input class="form-control" placeholder="número de historia clinica" name="usua" type="number" required>
								</div>
								<div>
									<p>Nombre</p> 
									<input class="form-control" placeholder="Escriba el nombre" name="usua" type="text" required>
								</div>
								<div>
									<p>1º Apellido</p> 
									<input class="form-control" placeholder="Escriba el primero apellido" name="usua" type="text" required>
								</div>
								<div>
									<p>2º Apellido</p> 
									<input class="form-control" placeholder="Escriba el segundo apellido" name="usua" type="text">
								</div>
								<div>
									<p>Genero</p> 
									<select class="span3" id="subject" name="subject">
										<option selected value="na">
											Selecciona sexo:
										</option>						
										<option value="service">
											Hombre
										</option>
										<option value="service">
											Mujer
										</option>
									</select>
								</div>
								<div>
									<p>Fecha de nacimiento</p> 
									<input class="form-control" placeholder="Escribe tu fecha de cumpleaños" name="usua" type="date">
								</div>
								<div>
									<p>NIF o Pasaporte</p> 
									<input class="form-control" placeholder="Escribe tu NIF o Pasaporte" name="usua" type="text">
								</div>
								<br>
							<h3>Dirección</h3>
								<div>
									<p>Calle</p> 
									<input class="form-control" placeholder="Escribe tu calle" name="usua" type="text">
								</div>
								<div>
									<p>Numero</p> 
									<input class="form-control" placeholder="Numero de patio" name="usua" type="number">
								</div>
								<div>
									<p>Puerta</p> 
									<input class="form-control" placeholder="Numero de puerta" name="usua" type="text">
								</div>
								<div>
									<p>Código Postal</p> 
									<input class="form-control" placeholder="Escribe el Código Postal" name="usua" type="number">
								</div>
								<div>
									<p>Ciudad</p> 
									<input class="form-control" placeholder="Escribe tu Ciudad" name="usua" type="text">
								</div>
								<br>
							<h3>Lista aseguradora</h3>
								<div>
									<p>Nombre aseguradora</p> 
									<input class="form-control" placeholder="Escribe el nombre de la aseguradora" name="usua" type="text">
								</div>
								<div>
									<p>Tipo de seguro</p> 
										<select class="span3" id="subject" name="subject">
											<option selected value="na">
												Selecciona uno:
											</option>						
											<option value="service">
												Salud
											</option>
											<option value="suggestions">
												Familiar
											</option>						
											<option value="product">
												Dental
											</option>										
											<option value="product">
												Otros
											</option>
										</select>
								</div>
								<div>
									<p>Numero de la tarjeta</p> 
									<input class="form-control" placeholder="Escribe el numero de la tarjeta" name="usua" type="number">
								</div>
						</form>
					</div>
				</div>			
			</div>
		</div>
	</div>
</section>
    `
}