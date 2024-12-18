window.addEventListener("load", () => {
    fetchComponents();
    
})
    
function fetchComponents() {
    let code_html ="";
    $.ajax({
        url: "../../controllers/api/components.php",
        type: "POST",        
        dataType: "JSON",
        success: function (r) {

            let message = []

            if (r.status == "success") {                          
                console.log("Fetch exitoso:", r.message);

                r.data.forEach(item => {
                  //console.log(item);
                  
                  switch(item.comp_name){
                    case"Envase":

                    let parts = item.comp_specification.split(" ");
                    let part1 = parts[0];
                    let part2 = parts[1];

                    code_html += `
                    <div class="container-v3" id="container-component_`+ item.id +`">
                      <div class="container-all" id="container-all-component_`+ item.id +`">  
                                
                        <div class="container__components">
                          <div class="container__components--volume">
                            <a>`+ item.comp_name +`</a>
                          </div>
                        </div>

                        <div class="container__components">
                          <div class="container__components--volume">
                            <a>`+ part1 +`</a>
                          </div>
                          <div class="container__components--description">
                            <span>`+ part2 +`</span>
                          </div>
                        </div>

                        <div class="container__components">
                          <div class="container__components--volume">
                            <a>`+ item.label +`</a>
                          </div>      
                        </div>    

                        <div class="container__components">
                          <div class="container__components--volume">
                            <a>stock: ${item.stock === null ? 'Sin STOCK' : item.stock +``+item.unit}</a>
                          </div>      
                        </div>

                        <div id="div-add_order" class="form-group mt-3 div-add_order">
                          <button id="btn-add_order-`+ item.id +`" class="btn btn-primary rounded add-order-btn">Agregar orden</button>
                        </div>

                      </div>
                    </div>
                    `;
                    break;

                    case"Pulsador":
                    code_html += `                    
                      <div class="container-v3" id="container_`+ item.id +`">
                        <div class="container-all" id="container_`+ item.id +`">    
                                  
                          <div class="container__components">
                            <div class="container__components--volume">
                              <a>`+ item.comp_name +`</a>
                            </div>
                          </div>

                          <div class="container__components">
                            <div class="container__components--volume">
                              <a>Modelo : `+ item.comp_specification +`</a>
                            </div>      
                          </div>

                          <div class="container__components">
                            <div class="container__components--volume">
                              <a>Color: `+ item.comp_color +`</a>
                            </div>      
                          </div>

                          <div class="container__components">
                            <div class="container__components--volume">
                              <a>stock: ${item.stock === null ? 'Sin STOCK' : item.stock+``+item.unit}</a>
                            </div>      
                          </div>

                          <div id="div-add_order" class="form-group mt-3 div-add_order">
                            <button id="btn-add_order-`+ item.id +`" class="btn btn-primary rounded add-order-btn">Agregar orden</button>
                          </div>

                        </div>
                      </div>
                    `;
                    break;
                    
                    default:
                      code_html += `
                      <div class="container-v3" id="container-component_`+ item.id +`">
                        <div class="container-all" id="container-all-component_`+ item.id +`">    
                                  
                          <div class="container__components">
                            <div class="container__components--volume">
                              <a>`+ item.comp_name +`</a>
                            </div>
                          </div>

                          <div class="container__components">
                            <div class="container__components--volume">
                              <a>`+ item.comp_specification +`</a>
                            </div>      
                          </div>    

                          <div class="container__components">
                            <div class="container__components--volume">
                              <a>stock: ${item.stock === null ? 'Sin STOCK' : item.stock+``+item.unit}</a>
                            </div>      
                          </div>
                              <div id="div-add_order" class="form-group mt-3 div-add_order">
                                <button id="btn-add_order-`+ item.id +`" class="btn btn-primary rounded add-order-btn">Agregar orden</button>
                              </div>

                        </div>
                      </div>
                      `;                  

                    }
                    $("#container__specific").append(code_html);
                    code_html = "";

                });
                
                //agrego el onclik para que tome cuando se preciona el btn addordercomponents
                $(".add-order-btn").on("click", function() {
                  addOrderComponents(this.id);
                });


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

function addOrderComponents(buttonId) {
  cleanId = buttonId.split("-");
  cleanIdNum = cleanId[2];
  const flag = 1;

  
  $.ajax({
    url: "../../controllers/api/order_components.php",
    type: "POST",
    data: { 
        flag: flag, 
        comp_order_id: cleanIdNum 
    },
    dataType: "JSON",
    success: function (r) {

        let message = []

        if (r.status == "success") {                          
            console.log("Agregado exitosamente:", r.message);
            alert("agregado exitosamente");
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
            console.log(message);
        }
    }
  });    
  
}