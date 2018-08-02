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
                        Pues nada, aqui estamos haciendo prueba xaxis antes de meter un formulario de lujo para los pacientes
					</div>
					<div class="tab-pane fade" id="profesional" role="tabpanel" aria-labelledby="nav-profile-tab">
                        Pues nada, hemos logrado entrar a la segunda parte, para meter un formulario xaxi de medicos
					</div>
				</div>			
			</div>
		</div>
	</div>
</section>
    `
}