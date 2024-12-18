window.addEventListener("load", () => {
    fetchOrders();
    
})

function fetchOrders(){
    let code_html ="";
    $.ajax({
        url: "../../controllers/api/fetch_order_components.php",
        type: "POST",
        dataType: "JSON",
        success: function (r) {
    
            let message = []
    
            if (r.status == "success") {                                       

                r.data.forEach(item => {
                console.log(item);

                    let notUnit = 
                    `<div class="container__components">
                        <div class="container__components--volume">
                            <input id="new_volume_`+ item.id +`" type="text" placeholder="Formato de volumen">
                        </div>
                    </div>`;


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
                                        <a>`+ item.comp_name + `</a>
                                    </div>
                                </div>

                                <div class="container__components">
                                    <div class="container__components--volume">
                                        <a>12</a>
                                    </div>
                                    <div class="container__components--description">
                                        <span>oz</span>
                                    </div>
                                </div>

                                <div class="container__components">
                                    <div class="container__components--volume">
                                        <a>`+ item.label + `</a>
                                    </div>
                                </div>

                                <div class="container__components">
                                    <div class="container__components--volume">
                                        <a>stock: ${item.stock === null ? 'Sin STOCK' : item.stock+``+item.unit}</a>
                                    </div>      
                                </div>

                                <div class="container__components">
                                    <div class="container__components--volume">
                                        <input type="number" placeholder="Cantidad a comprar">
                                    </div>
                                </div>

                                ${item.stock === null ? notUnit : item.unit}         

                                <div id="div-add_order" class="form-group mt-3 div-add_order">
                                    <button id="btn-add_order-`+ item.order_id +`" class="btn btn-primary rounded add-order-btn">Ordenar</button>
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
  
                            <div class="container__components">
                                <div class="container__components--volume">
                                    <input type="number" placeholder="Cantidad a comprar">
                                </div>
                            </div>
                                
                            ${item.stock === null ? notUnit : item.unit}

                            <div id="div-add_order" class="form-group mt-3 div-add_order">
                                <button id="btn-add_order-`+ item.order_id +`" class="btn btn-primary rounded add-order-btn">Ordenar</button>
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
                                
                            <div class="container__components">
                                <div class="container__components--volume">
                                    <input type="number" placeholder="Cantidad a comprar">
                                </div>
                            </div>

                            ${item.stock === null ? notUnit : item.unit}
                                
                            <div id="div-add_order" class="form-group mt-3 div-add_order">
                                <button id="btn-add_order-`+ item.order_id +`" class="btn btn-primary rounded add-order-btn">Ordenar</button>
                            </div>
  
                          </div>
                        </div>
                        `;                  
  
                      }
                      $("#container__specific--order_components").append(code_html);
                      code_html = "";

                  });                

                  $(".add-order-btn").on("click", function() {
                    orderComponent(this.id);
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
                console.log(message);
            }
        }
      });   
}

function orderComponent(buttonId){
    cleanId = buttonId.split("-");
    let cleanIdNum = cleanId[2];    
    const flag = 2;

    let amount = "";

    $.ajax({
        url: "../../controllers/api/order_components.php",
        type: "POST",
        data: { 
            flag: flag,
            /*
            consegir comp_stock_id desde el html, y mandarlo como parametro

            terminar la consulta con transaction
            
            */
            comp_stock_id: comp_stock_id,
            comp_order_id: cleanIdNum,
            amount: amount
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
                alert(message);
                console.log(message);
            }
        }
      });
}
