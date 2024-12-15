window.addEventListener("load", () => {
    const form = document.getElementById("login-form");
    const email = document.getElementById("login-email");
    const password = document.getElementById("login-password-field");    
    const msg_error = document.getElementById("login_error-msg");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();      
      login(email.value, password.value);
    });

function login(emailValue, passwordValue) {
    $.ajax({
        url: "../api/users/login.php",
        type: "POST",
        data: { 
            email: emailValue, 
            password: passwordValue 
        },
        dataType: "JSON",
        success: function (r) {

            let message = []

            if (r.status == "success") {                          
                console.log("Login exitoso:", r.message);
                window.location.href = "../web/home.php";
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