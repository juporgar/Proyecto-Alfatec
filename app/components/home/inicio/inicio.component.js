export const InicioComponent = {
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
                                        <button type="sumbit" class="btn btn-secondary">
                                            Si
                                        </button>
                                        <button type="button" class="btn btn-primary" data-dismiss="modal">
                                            No
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>                    
		            </div>
		            <div class="row">
		                <div class="col-md-12">
		                    <table class="table table-hover ">
                                <thead class="bg-light ">
                                  <tr>
                                    <th>
                                      <div class="form-check-inline">
                                          <label class="form-check-label">
                                            <input type="checkbox" class="form-check-input" value="">
                                           </label>
                                       </div>
                                    </th>  
                                    <th>Username</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Edit</th>
                                  </tr>
                                </thead>
                                <tbody>                                     
                                  <tr>
                                    <td>
                                        <div class="form-check-inline">
                                          <label class="form-check-label">
                                            <input type="checkbox" class="form-check-input" value="">
                                           </label>
                                       </div>
                                    </td>  
                                    <td><small>Johnyahua</small></td>
                                    <td><small>Doe</small></td>
                                    <td><small>john@example.com</small></td>
                                    <td><small>Admin</small></td>
                                    <td>
                                        <a ui-sref="editarComponent"><i class="fa fa-pencil-square-o"></i></a>
                                        <a ui-sref="infoComponent"><i class="fa fa-eye"></i></a>
                                        <a data-toggle="modal" data-target="#EliminarUsers"><i class="fa fa-trash"></i></a>

                                        <div class="modal fade" id="EliminarUsers" tabindex="-1" role="dialog" aria-labelledby="EliminarUsers" aria-hidden="true">
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
                                                    <button type="sumbit" class="btn btn-secondary">
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