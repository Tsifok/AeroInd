window.addEventListener("load", () => {
    const btn = document.getElementById("");
    
  




    form.addEventListener("submit", (e) => {
      //e.preventDefault();      
      //login(email.value, password.value);
    });

function fetchComponents(emailValue, passwordValue) {
    $.ajax({
        url: "../api/components.php",
        type: "POST",        
        dataType: "JSON",
        success: function (r) {

            let message = []

            if (r.status == "success") {                          
                console.log("Fetch exitoso:", r.message);
                
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