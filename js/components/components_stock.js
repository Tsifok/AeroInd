window.addEventListener("load", () => {
    const btn_stock = document.getElementById("btn-components-stock");
    const btn_add = document.getElementById("btn-components-add");
    const btn_order = document.getElementById("btn-components-order");
    
    fetchComponents();
    
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

                        </div>
                      </div>
                      `;                  

                    }
                    $("#container__specific").append(code_html);
                    code_html = "";

                });

                
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