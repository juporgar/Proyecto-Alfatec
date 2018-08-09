import controller from './inicio.controller'

export const InicioComponent = {
    bindings: {
        dataResult: '<'
    },
    controller,
    template: `
    <div class="container-fluid">
	<div class="row">
		<div class="col-md-12">
		    <div class="card">
		        <div class="card-body">
		            <div class="row">
		                <div class="col-md-2 border-right">
		                    <h4>Lista de usuarios</h4>
		                </div>		                
		            </div>
                    <div class="row">
                    <div class="col-md-2 border-right">
                    </div>	
                    <div class="col-md-5">
		                    <a ui-sref="registroComponent" class="btn btn-sm btn-primary">Añadir Usuario</a>
		                </div>
                        <div class="col-md-5">
                            <button type="button" class="btn btn-sm" data-toggle="modal" data-target="#EliminarMedicos">
                            Borrar Medico
                            </button>
                        </div>
                         <div class="modal fade" id="EliminarMedicos" tabindex="-1" role="dialog" aria-labelledby="EliminarMedicos" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title">
                                            Borrar Medicos
                                        </h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        Ten cuidado, vas a borrar a todos los medicos ¿Estás seguro?
                                    </div>
                                    <div class="modal-footer">
                                        <button type="sumbit" class="btn btn-secondary"  ng-click="$ctrl.deleteMedic()" data-dismiss="modal">
                                            Si
                                        </button>
                                        <button type="button" class="btn btn-primary" data-dismiss="modal">
                                            No
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>                    
		                <div class="col-md-12">
		                    <table class="table table-hover ">
                                <thead class="bg-light ">
                                  <tr> 
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>NIF o Pasaporte</th>
                                    <th>Profesión</th>
                                    <th>Edit</th>
                                  </tr>
                                </thead>
                                <tbody ng-repeat="user in $ctrl.dataResult track by user.id">                                     
                                  <tr> 
                                    <td>{{user.nombre}}</td>
                                    <td>{{user.primerApellido}}</td>
                                    <td>{{user.nif}}</td>
                                    <td>{{user.profesion}}</td>
                                    <td>
                                        <a ng-if="user.tipo == 'Paciente'" ui-sref="editarPacienteComponent({userID: user.id})">
                                            <i class="fa fa-pencil-square-o"></i>
                                        </a>
                                        <a ng-if="user.tipo == 'Profesional'" ui-sref="editarProfesionalComponent({userID: user.id})">
                                            <i class="fa fa-pencil-square-o"></i>
                                        </a>

                                        <a ng-if="user.tipo == 'Paciente'" ui-sref="infoPaciComponent({userID: user.id})">
                                            <i class="fa fa-eye"></i>
                                        </a>
                                        <a ng-if="user.tipo == 'Profesional'" ui-sref="infoProfeComponent({userID: user.id})">
                                            <i class="fa fa-eye"></i>
                                        </a>

                                        <a data-toggle="modal" data-target="#EliminarUsers{{user.id}}">
                                            <i class="fa fa-trash"></i>
                                        </a>

                                        <div class="modal fade" id="EliminarUsers{{user.id}}" tabindex="-1" role="dialog" aria-labelledby="EliminarUsers" aria-hidden="true">
                                        <div class="modal-dialog modal-dialog-centered" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title">
                                                        Borrar Usuario
                                                    </h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    Ten cuidado, vas a borrar a este usuario ¿Estás seguro?
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="sumbit" ng-click="$ctrl.deleteUser(user.id)" class="btn btn-secondary" data-dismiss="modal">
                                                        Si
                                                    </button>
                                                    <button type="button" class="btn btn-primary" data-dismiss="modal">
                                                        No
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                  </tr>
                                </tbody>
                            </table>
		                </div>
		            </div>
		        </div>
		    </div>
		</div>
	</div>
</div>   
        `
}

{
    /* <button  ng-click="$ctrl.deleteUser(user.nif)">
    <i class="fa fa-trash"></i>
    </button> */
}