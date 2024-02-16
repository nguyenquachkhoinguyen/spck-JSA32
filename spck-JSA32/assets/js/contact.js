
let contact = document.getElementById('contact')
contact.addEventListener("submit", (event) => {
    event.preventDefault();

    let name = document.getElementById('fname');
    let em = document.getElementById('email');
    let mes = document.getElementById('mess');
    console("123")
    if (name == 0 && em == 0 && mes == 0) {
        alert("123");
        return
    } else if (!name == 0 && !em == 0 && !mes == 0) {
        alert("moi ban nhap...")
    }
})