// Función para autenticar al usuario
function loginUser() {
    // Obtener los valores de usuario y contraseña
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verificar las credenciales (aquí puedes implementar la lógica real de autenticación)
    // Por ahora, simularemos que las credenciales son correctas si el nombre de usuario es "usuario" y la contraseña es "contraseña"
    if (username === "usuario" && password === "123") {
        // Guardar el estado de inicio de sesión en LocalStorage
        localStorage.setItem("isLoggedIn", "true");
        // Redirigir al usuario a la página del dashboard de usuario
        window.location.href = "dashboardusuario.html";
    } else if (username === "conductor" && password === "123") {
        // Guardar el estado de inicio de sesión en LocalStorage
        localStorage.setItem("isLoggedIn", "true");
        // Redirigir al usuario a la página del dashboard del conductor
        window.location.href = "dashboardconductor.html";
    } else {
        // Si las credenciales son incorrectas, mostrar un mensaje de error (puedes cambiar esto según tus necesidades)
        alert("Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.");
    }

    // Prevenir el envío del formulario
    return false;
}
