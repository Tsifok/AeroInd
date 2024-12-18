<div class="container-v5 d-grid grid-template-rows">
  <h4 class="mb-5 mt-4 ms-5">Componentes de <a href="home.php" style="color: rgb(117, 117, 117);">GurbarrySA</a></h4>
  <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-around">    
    <a href="components.php" id="btn-components-stock" aria-selected="false">Stock</a>
    <a  href="add_components.php" id="btn-components-add" aria-selected="true">Añadir</a>
    <a  href="order_components.php" id="btn-components-order" aria-selected="false">Crear orden</a>
  </div>
</div>

<div id="container__specific--add_components">
    <section>
        <form method="POST" action="" id="add_comp_form" class="signin-form mt-3">
                    
            <div class="form-group">
                <label class="form-control-placeholder" for="comp_name_selector">Componente</label>                      
                <select name="comp_name_selector" id="comp_name_selector" class="form-control" required>
                    <option value="">Seleccione componente</option>
                    <option value="Envase">Envase</option>
                    <option value="Pulsador">Pulsador</option>
                    <option value="Concentrado">Concentrado</option>
                    <option value="Otro">Otro</option>
                </select>
            </div>   

            <div id="add_comp_code">
                <!-- Aqui entra el code html -->
            </div>

        </form> 
    </section>
</div>

<script src="../../js/components/add_components.js"></script>