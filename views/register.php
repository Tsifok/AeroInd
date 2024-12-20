<section class="ftco-section">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-7 col-lg-6">
        <div class="wrap">          
          <div class="login-wrap p-4 p-md-5">
            <div class="d-flex">
              <div class="w-100">
                <h3 class="mb-4"><b>Registra a un empleado de <a href="home.php" style="color: rgb(117, 117, 117);">GurbarrySA</a></b> </h3>
              </div>              
            </div>

            <form method="post" action="" class="signup-form mt-3" id="register-form">
                <div class="form-group ">
                    <label class="form-control-placeholder" for="dni">DNI</label>  
                    <input type="text" class="form-control" name="dni" id="register-dni" minlength="8" maxlength="9" required>                                
                </div>
                
                <div class="form-group">
                    <label class="form-control-placeholder" for="name">Nombre</label>
                    <input type="text" class="form-control" name="name" id="register-name" maxlength="50" required>                                
                </div>
                
                <div class="form-group ">
                    <label class="form-control-placeholder" for="username">Apellido</label>
                    <input type="text" class="form-control" name="lastname" id="register-lastname" maxlength="30" required>                
                </div>
                
                <div class="form-group ">
                    <label class="form-control-placeholder" for="email">Email</label>
                    <input type="text" class="form-control " name="email" id="register-email" required>                
                </div>
                
                <div class="form-group ">
                    <label class="form-control-placeholder" for="rol">Cargo</label>                      
                    <select name="rol" id="register-rol" class="form-control" required>
                        <option value="">Seleccione cargo</option>
                        <option value="empleado">Empleado</option>
                        <option value="gerente">Gerente</option>
                    </select>
                </div>

                <div class="form-group">
                    <label class="form-control-placeholder" for="birhtdate">Fecha de nacimiento</label>                    
                    <input type="date" class="form-control form" name="birhtdate" id="register-birthdate" required>
                </div>              

              <div class="form-group mt-3">
                <button type="submit" class="form-control btn btn-primary rounded submit px-3 btn-garry" name="button submit">Registrar</button>
              </div>
              <p id="register_error-msg" class="errormessage__form"></p>
            </form>

<script src="../../js/register.js" type="text/javascript"></script>