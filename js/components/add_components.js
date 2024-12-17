window.addEventListener("load", () => {
    const btn_selector = document.getElementById('comp_name_selector');    
    const form = document.getElementById('add_comp_form');

    btn_selector.addEventListener("change", function(){
        let selectorValue = btn_selector.value
        selectForm(selectorValue);

    })

    form.addEventListener("submit", (e) => {
        e.preventDefault(); 
        addFunctionQuery(form);
    });


})

function selectForm(btn_selector) {
    let code_html ="";
    let add_form = $("#add_comp_code");


    switch(btn_selector){
            case "Envase":            
            code_html += `
                <div class="form-group add_comp">
                    <label class="form-control-placeholder" for="add_comp_specification">Volumen que contiene</label>  
                    <input type="text" id="add_comp_specification" class="form-control" name="add_comp_specification" placeholder="Ejemplo: 9 oz" required>
                </div>
                <div class="form-group">
                    <label class="form-control-placeholder" for="add_comp_label">Etiqueta</label>
                    <input type="text" id="add_comp_label" class="form-control" name="add_comp_label" placeholder="Ejemplo: Desinf. Amb. Marina" required>
                </div>
                    <div class="form-group mt-3">
                        <button type="submit" class="form-control btn btn-primary rounded submit px-3">Añadir</button>
                    </div>
                <p id="add_comp_error-msg" class="errormessage__form"></p>
            `;

            break;
            
            case "Pulsador":            
            code_html += `
                <div class="form-group">
                    <label class="form-control-placeholder" for="add_comp_specification">Modelo</label>  
                    <input type="text" id="add_comp_specification" class="form-control" name="add_comp_specification" placeholder="Ejemplo: BC45" required>
                </div>                    
                <div class="form-group">
                        <label class="form-control-placeholder" for="comp_color">Color</label>
                        <input type="text" id="comp_color" class="form-control" name="comp_color" placeholder="Ejemplo: Negro" required>
                </div>                
                <div class="form-group mt-3">
                    <button type="submit" class="form-control btn btn-primary rounded submit px-3 btn-garry">Añadir</button>
                </div>
                <p id="add_comp_error-msg" class="errormessage__form"></p>
            `;

            break;

            case "Concentrado":            
            code_html += `
                <div class="form-group add_comp_name">
                    <label class="form-control-placeholder" for="add_comp_name">Nombre</label>  
                    <input type="text" id="add_comp_name" class="form-control" name="add_comp_name" placeholder="Ejemplo: Concentrado Des. Amb" required>
                </div>
                <div class="form-group">
                    <label class="form-control-placeholder" for="add_comp_specification">Espesificacion</label>  
                    <input type="text" id="add_comp_specification" class="form-control" name="add_comp_specification" placeholder="Ejemplo: Marina" required>
                </div>
                <div class="form-group">
                    <label class="form-control-placeholder" for="add_comp_kind">Uso</label>  
                    <input type="text" id="add_comp_kind" class="form-control" name="add_comp_kind" placeholder="Ejemplo: Incecticida/Desinfectante" required>
                </div>
                <div class="form-group mt-3">
                    <button type="submit" class="form-control btn btn-primary rounded submit px-3">Añadir</button>
                </div>
                <p id="add_comp_error-msg" class="errormessage__form"></p>
            `;

            break;

            case "Otro":            
            code_html += `
                <div class="form-group">
                    <label class="form-control-placeholder" for="add_comp_name">Nombre</label>  
                    <input type="text" id="add_comp_name" class="form-control" name="add_comp_name" placeholder="Ejemplo: Valvula" required>
                </div>
                <div class="form-group">
                    <label class="form-control-placeholder" for="add_comp_specification">Espesificacion</label>  
                    <input type="text" id="add_comp_specification" class="form-control" name="add_comp_specification" placeholder="Ejemplo: 9 oz" required>
                </div>
                <div class="form-group mt-3">
                    <button type="submit" class="form-control btn btn-primary rounded submit px-3">Añadir</button>
                </div>
                <p id="add_comp_error-msg" class="errormessage__form"></p>
            `;

            break;


        default:            
            code_html = "";        
            break;

    }
    add_form.html(code_html);
    code_html = "";
}

function addFunctionQuery(e){    
    const formData = new FormData(e);
    const formValues = Object.fromEntries(formData.entries());

    $.ajax({
        url: "../../controllers/api/add_components.php",
        type: "POST",
        data: formValues,
        dataType: "JSON",
        success: function (r) {

            let message = []

            if (r.status == "success") {                          
                console.log("Add exitoso:", r.message);
                alert("Componente añadido exitosamente");
                e.reset();
                document.getElementById('add_comp_code').innerHTML = '';

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