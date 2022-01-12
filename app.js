var username
var password

document.addEventListener("submit",(event)=>{
    console.log("Submitted")
    username = document.getElementById("username").value
    password = document.getElementById("password").value

    const headers = new Headers()
    headers.append("Accept", "application/json")
    headers.append("Authorization", btoa(username + ":" + password))

    fetch('http://localhost:3000/',{headers: headers}).then(function (response) {
        if(response.ok){
            document.write("SUCCESFULL LOGIN")
        }
        throw respons;
    }).then(function (data){
        console.log(data);
    }).catch(function (error){
        console.log(error);
    });
    event.preventDefault()
})


console.log("Hello");
fetch("http://localhost:3000",{})
.then(()=>{})
.catch(()=>{
    console.log("an error occured")
})






