<section class="ftco-section">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-7 col-lg-6">
        <div class="wrap">          
          <div class="login-wrap p-4 p-md-5">
            
            <div class="d-flex">
              <div class="w-100">
                <h3 class="mb-2	"><b>Inicia sesión en GurbarrySA</b></h3>
              </div>              
            </div>

            <form method="POST" action="" id="login-form" class="signin-form mt-3">
              
                <div class="form-group">
                    <label class="form-control-placeholder" for="email">Email</label>  
                    <input type="text" id="login-email" class="form-control" name="email" required>                                    
                </div>
                <div class="form-group">
                    <label class="form-control-placeholder" for="password">Contraseña</label>
                    <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span>
                    <input id="login-password-field" type="password" class="form-control" name="password" required>                                                    
                </div>
                <div class="form-group mt-3">
                    <button type="submit" class="form-control btn btn-primary rounded submit px-3 btn-garry">Iniciar sesión</button>
                </div>
                <div class="form-group d-md-flex">                
                    <div class="w-100 mt-1 text-md-center">
                    <a class="links2" href="../web/forgot_password.php">¿Olvidaste tu contraseña?</a>
                    </div>
                </div>
                <p id="login_error-msg" class="errormessage__form"></p>
            </form>   

          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<script src="../../js/login.js" type="text/javascript"></script>