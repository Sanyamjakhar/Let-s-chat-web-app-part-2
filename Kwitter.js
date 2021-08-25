function login() {
    name = document.getElementById("Login_input").value
    localStorage.setItem("name", name)
    window.location = "kwitter_room.html";
}