document.addEventListener("submit",(event)=>{
    console.log("submitted")
    user = document.getElementById("user").value
    password = document.getElementById("password").value

    const headers = new Headers()
    headers.append("Accept", "application/json")
    headers.append("Authorization",btoa(user + ":" + password))

    event.preventDefault()
})

function validate(){
    console.log("Hello World");
    let user = document.getElementById("user").value
    let password = document.getElementById("password").value
    console.log(`User = ${user} Password = ${password}`)

    const XHR = new XMLHttpRequest(), FD = new FormData();
    FD.append(name,data [user]);
    FD.append(name,data [password]);
}