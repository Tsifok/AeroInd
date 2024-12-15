window.addEventListener("load", () => {
    const dni = document.getElementById("register-dni");
    const name = document.getElementById("register-name");
    const lastname = document.getElementById("register-lastname");
    const email = document.getElementById("register-email");    
    const rol = document.getElementById("register-rol");
    const birthdate = document.getElementById("register-birthdate");
    
    const form = document.getElementById("register-form");
    
    const msg_error = document.getElementById("register_error-msg");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();      
      register(dni.value, name.value, lastname.value, email.value, rol.value, birthdate.value);
    });

function register(dniValue, nameValue, lastnameValue, emailValue, rolValue, birthdateValue) {
    $.ajax({
        url: "../api/users/register.php",
        type: "POST",
        data: { 
            dni: dniValue,
            name: nameValue,
            lastname: lastnameValue,
            email: emailValue,
            rol: rolValue,
            birthdate: birthdateValue            
        },
        timeout: 10000,
        //dataType: "JSON",
        success: function (r) {
        console.log("Entro en el success");
            let message = []

            if (r.status == "success") {                          
                console.log("Registro de empleado exitoso:", r.message);
                alert("Registro de empleado exitoso:", r.message);;
                          
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