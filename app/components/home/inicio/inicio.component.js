export const InicioComponent = {
    template: `
    <div class="container-fluid">
	<div class="row">
		<div class="col-md-12">
		    <div class="card">
		        <div class="card-body">
		            <div class="row">
		                <div class="col-md-2 border-right">
		                    <h4>User</h4>
		                </div>
		                <div class="col-md-5">
		                    <a ui-sref="registroComponent" class="btn btn-sm btn-primary">Añadir Usuario</a>
		                </div>
                        <div class="col-md-5">
                            <button type="button" class="btn btn-sm">Borrar Medico</button>
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
                                    <td><a href="#"><small>Johnyahua</small></a></td>
                                    <td><small>Doe</small></td>
                                    <td><small>john@example.com</small></td>
                                    <td><small>Admin</small></td>
                                    <td>
                                        <a href="#"><i class="fa fa-pencil-square-o"></i></a>
                                        <a href="#"><i class="fa fa-eye"></i></a>
                                        <a href="#"><i class="fa fa-trash"></i></a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                        <div class="form-check-inline">
                                          <label class="form-check-label">
                                            <input type="checkbox" class="form-check-input" value="">
                                           </label>
                                       </div>
                                    </td>  
                                    <td><a href="#"><small>Johnyahua</small></a></td>
                                    <td><small>Doe</small></td>
                                    <td><small>john@example.com</small></td>
                                    <td><small>Admin</small></td>
                                    <td>
                                        <a href="#"><i class="fa fa-pencil-square-o"></i></a>
                                        <a href="#"><i class="fa fa-eye"></i></a>
                                        <a href="#"><i class="fa fa-trash"></i></a>
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