window.addEventListener("load", () => {
    const btn_stock = document.getElementById("btn-components-stock");
    const btn_add = document.getElementById("btn-components-add");
    const btn_order = document.getElementById("btn-components-order");
    
    fetchComponents();
    
function fetchComponents() {
    $.ajax({
        url: "../../controllers/api/components.php",
        type: "POST",        
        dataType: "JSON",
        success: function (r) {

            let message = []

            if (r.status == "success") {                          
                console.log("Fetch exitoso:", r.message);
                console.log("Fetch exitoso:", r.data);
                
// ----------------- Agregar crear tabla con html => ''

            } else if (r.status == "error") {
                // Manejo de errores
                if (Array.isArray(r.message)) {
                    // Si 'r.message' es un array
                    message.push(...r.message);
                } else {
                    // Si 'r.message' es un solo mensaje
                    message.push(r.message);
                }
            }
            // Mandar mnsj de error al user
            if(message.length > 0){                        
                msg_error.innerText = message.map(item => `• ${item}`).join('\n');
            }
        }
    });
}

})

/*

<!-- valvulas -->
<div class="container-v3" id="container-account_32">
  <div class="container-all" id="container-all-account_32">           
      
    <div class="container__components">
      <div class="container__components--name">
        <a>Valvula</a>
      </div>
    </div>

    <div class="container__components">
      <div class="container__components--volume">
        <a>9</a>
      </div>
      <div class="container__components--description">
        <span>oz</span>
      </div>
    </div> 

    <div class="container__components">
      <div class="container__components--volume">
        <a>stock : 1000 unidades</a>
      </div>      
    </div> 

  </div>
</div>
<!-- pulsadores -->
<div class="container-v3" id="container-account_32">
  <div class="container-all" id="container-all-account_32">    
            
    <div class="container__components">
      <div class="container__components--volume">
        <a>pulsador</a>
      </div>
    </div>

    <div class="container__components">
      <div class="container__components--volume">
        <a>modelo</a>
      </div>      
    </div>

    <div class="container__components">
      <div class="container__components--volume">
        <a>color: rojo</a>
      </div>      
    </div>

    <div class="container__components">
      <div class="container__components--volume">
        <a>stock : 1000</a>
      </div>      
    </div>

  </div>
</div>
<!-- envases -->
<div class="container-v3" id="container-account_32">
  <div class="container-all" id="container-all-account_32">    
            
    <div class="container__components">
      <div class="container__components--volume">
        <a>Envase "desinfectante"</a>
      </div>
    </div>

    <div class="container__components">
      <div class="container__components--volume">
        <a>9</a>
      </div>
      <div class="container__components--description">
        <span>oz</span>
      </div>
    </div>

    <div class="container__components">
      <div class="container__components--volume">
        <a>lavanda</a>
      </div>      
    </div>    

    <div class="container__components">
      <div class="container__components--volume">
        <a>stock : 1000</a>
      </div>      
    </div>

  </div>
</div>
<!-- Componentes quimicos -->
<div class="container-v3" id="container-account_32">
  <div class="container-all" id="container-all-account_32">    
            
    <div class="container__components">
      <div class="container__components--volume">
        <a>Concentrado "desinfectante"</a>
      </div>
    </div>

    <div class="container__components">
      <div class="container__components--volume">
        <a>"lavanda"</a>
      </div>      
    </div>    

    <div class="container__components">
      <div class="container__components--volume">
        <a>stock : 1000 ml</a>
      </div>      
    </div>

  </div>
</div>
<!-- componentes generales -->
<div class="container-v3" id="container-account_32">
  <div class="container-all" id="container-all-account_32">    
            
    <div class="container__components">
      <div class="container__components--volume">
        <a>nombres generales</a>
      </div>
    </div>

    <div class="container__components">
      <div class="container__components--volume">
        <a>stock : 1000 unit</a>
      </div>      
    </div>

  </div>
</div>

*/